import { SelectionModel } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, mergeMap, take } from 'rxjs/operators';
import { HeaderActionsService } from '../../core/header/header-actions.service';
import { File } from '../../models/file';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-files',
  template: `
    <ng-container *ngIf="files$ | async as files">
      <ng-container *ngIf="!files.length">
        <!-- TODO: center and add button -->
        <div class="flex-center full-height">
          <div>
            <h3>
              No Files
            </h3>
            <p>
              Create a new file, and click save and it will appear here
            </p>
          </div>
        </div>
      </ng-container>
      <mat-list>
        <mat-list-item *ngFor="let file of files">
          <div matLine>
            <div class="flex-layout-row flex-align-center">
              <span>
                <!-- TODO: add checkbox -->
                <mat-checkbox
                  color="primary"
                  aria-label="Select"
                  [checked]="selection.isSelected(file.id)"
                  (change)="selection.toggle(file.id)"
                >
                </mat-checkbox>
              </span>
              <a [routerLink]="['/editor', file.id]">
                <div
                  class="mat-subheading-1 no-margin"
                  style="margin-left: 8px"
                >
                  {{ file.name }}
                </div>
              </a>
              <span class="full-width"></span>
              <span>
                <!-- TODO: add menu button -->
                <button
                  type="button"
                  mat-icon-button
                  [matMenuTriggerFor]="menu"
                >
                  <mat-icon>more_vert</mat-icon>
                </button>
                <mat-menu #menu="matMenu">
                  <a mat-menu-item [routerLink]="['/editor', file.id]">Edit</a>
                  <button mat-menu-item (click)="remove(file)">Remove</button>
                </mat-menu>
              </span>
            </div>
          </div>
        </mat-list-item>
      </mat-list>
    </ng-container>
    <a
      aria-label="Create File"
      [routerLink]="['/editor']"
      mat-fab
      title="Create File"
      class="fab"
    >
      <mat-icon>add</mat-icon>
    </a>
    <ng-template #actionTemplate>
      <span class="flex-layout-row align-center full-width">
        <span class="flex-100">
          <input
            type="text"
            autocomplete="off"
            (keyup)="query$.next(queryInput.value)"
            placeholder="Search"
            class="full-width basic-input"
            #queryInput
          />
        </span>
        <span>
          <button
            *ngIf="selection.hasValue()"
            type="button"
            aria-label="Remove Selected"
            title="Remove Selected"
            (click)="removeSelected()"
            mat-icon-button
          >
            <mat-icon>delete</mat-icon>
          </button>
        </span>
      </span>
    </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilesComponent implements OnInit {
  @ViewChild('actionTemplate') set actionTemplate(
    actionTemplate: TemplateRef<any>
  ) {
    if (actionTemplate) {
      this.headerActions.clear();
      this.headerActions.setTemplateRef$(actionTemplate);
    }
  }
  public selection = new SelectionModel<string>(true, []);
  public query$ = new BehaviorSubject<string>('');
  public orderBy$ = new BehaviorSubject<keyof File>('name');
  public files$!: Observable<File[]>;
  constructor(
    private headerActions: HeaderActionsService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.files$ = this.getFiles$();
  }

  remove(file: File) {
    this.fileService
      .remove(file.id)
      .pipe(take(1))
      .subscribe(() => console.log('removed single file', { file }));
  }
  removeSelected() {
    this.fileService
      .removeMultiple(this.selection.selected)
      .pipe(take(1))
      .subscribe(() => console.log('removed selected'));
  }
  private getFiles$(): Observable<File[]> {
    return combineLatest([
      this.orderBy$.pipe(distinctUntilChanged()),
      this.query$.pipe(distinctUntilChanged())
    ]).pipe(
      mergeMap(([orderBy, query]) =>
        this.fileService.searchFiles$({ orderBy, query })
      )
    );
  }
}
