import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { HeaderActionsService } from '../../core/header/header-actions.service';
import { AppSettings } from '../../models/app-settings';
import { File } from '../../models/file';
import { AppSettingsService } from '../../services/app-settings.service';
import { FileService } from '../../services/file.service';
import { EditorMarkdownService } from './editor-markdown.service';

@Component({
  selector: 'app-editor',
  template: `
    <div class="full-height">
      <!-- TODO: Add editor input field here -->
      <div class="flex-layout-row full-height">
        <div class="flex-50 max-width-50">
          <!-- text content -->
          <textarea
            #editor
            [value]="content$ | async"
            (keyup)="content$.next(editor.value)"
            class="full-width editor"
            id="editor"
            [style]="editorStyles$ | async"
          ></textarea>
        </div>
        <div class="flex-50 max-width-50 scroll">
          <!-- output -->
          <div #preview [innerHTML]="html$ | async" id="preview"></div>
        </div>
      </div>
    </div>
    <ng-template #actionTemplate>
      <span class="flex-layout-row full-width">
        <!-- TODO: Add label?? -->
        <span class="flex-100">
          <input
            type="text"
            autocomplete="off"
            aria-label="File Name"
            placeholder="No Name"
            [value]="name$ | async"
            (change)="name$.next(nameInput.value)"
            class="full-width basic-input"
            #nameInput
          />
        </span>
        <span>
          <button
            type="button"
            aria-label="Save"
            title="Save"
            (click)="save()"
            mat-icon-button
          >
            <mat-icon>save</mat-icon>
          </button>
        </span>
        <span>
          <button
            type="button"
            aria-label="Delete"
            title="Delete"
            (click)="remove()"
            mat-icon-button
          >
            <mat-icon>delete</mat-icon>
          </button>
        </span>
      </span>
    </ng-template>
  `,
  styles: [
    `
      .editor-button {
        background: inherit;
        color: inherit;
        box-shadow: 0px 0px 0px transparent;
        border: 0px solid transparent;
        text-shadow: 0px 0px 0px transparent;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnInit, OnDestroy {
  @ViewChild('actionTemplate') set actionTemplate(
    actionTemplate: TemplateRef<any>
  ) {
    if (actionTemplate) {
      this.headerActions.clear();
      this.headerActions.setTemplateRef$(actionTemplate);
    }
  }
  public DEFAULT = this.editorMarkdownService.DEFAULT;
  public editorStyles$!: Observable<Pick<AppSettings, 'fontSize'>>;
  public content$ = new BehaviorSubject('');
  public name$ = new BehaviorSubject('');
  /**
   * The calculated html parsed from the content observable
   */
  public html$!: Observable<string>;
  /**
   * The id in the url, this is only available
   * in the edit route
   */
  private id$!: Observable<string | null>;
  private takeUntil = new Subject();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private headerActions: HeaderActionsService,
    private appSettingService: AppSettingsService,
    private editorMarkdownService: EditorMarkdownService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.html$ = this.getHtml$();
    this.id$ = this.getId$();
    this.editorStyles$ = this.getEditorStyles$();

    this.watchId$();
  }

  ngOnDestroy() {
    this.takeUntil.next();
    this.takeUntil.unsubscribe();
  }

  public save() {
    this.id$
      .pipe(
        map((id) => ({
          id,
          name: this.name$.value,
          content: this.content$.value
        })),
        tap((val) => console.log('test with save', val)),
        mergeMap(({ id, name, content }) =>
          !!id
            ? this.fileService.update({
                id,
                content,
                name
              })
            : this.fileService.create({
                name,
                content
              })
        ),
        // TODO: notify user
        take(1)
      )
      .subscribe(({ id }) => {
        console.log('test with id', { id });
        this.router.navigate(['/editor', id]);
      });
  }
  public remove() {
    this.id$
      .pipe(
        mergeMap((id) => this.fileService.remove(id as string)),
        take(1)
        // TODO: add notify user
      )
      .subscribe(() => this.router.navigate(['']));
  }
  private getId$(): Observable<string | null> {
    return this.route.paramMap.pipe(map((paramMap) => paramMap.get('id')));
  }
  private getHtml$(): Observable<string> {
    return this.content$.pipe(
      map((str) => this.editorMarkdownService.convert(str))
    );
  }
  private getEditorStyles$(): Observable<Pick<AppSettings, 'fontSize'>> {
    return this.appSettingService.settings$.pipe(
      map(({ fontSize }) => ({ fontSize }))
    );
  }
  private watchId$() {
    this.id$
      .pipe(
        mergeMap((id: string | null) => {
          if (!id) {
            return of({
              id: undefined as any,
              name: '',
              content: this.editorMarkdownService.DEFAULT
            } as File);
          }
          return this.fileService.get(id).pipe(
            map(
              (file) =>
                file ||
                ({
                  id: undefined as any,
                  name: '',
                  content: this.editorMarkdownService.DEFAULT
                } as File)
            )
          );
        }),
        takeUntil(this.takeUntil)
      )
      .subscribe(({ name, content }) => {
        console.log('test in watchId', { name, content });
        this.name$.next(name);
        this.content$.next(content);
      });
  }
}
