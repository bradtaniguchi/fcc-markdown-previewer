import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderActionsService } from '../../core/header/header-actions.service';
import { EditorMarkdownService } from './editor-markdown.service';
import { FileService } from '../../services/file.service';
import { AppSettings } from '../../models/app-settings';
import { AppSettingsService } from '../../services/app-settings.service';

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
            [value]="DEFAULT"
            (keyup)="content$.next(editor.value)"
            class="full-width"
            id="editor"
            [style]="editorStyles$ | async"
          ></textarea>
        </div>
        <div class="flex-50 max-width-50 scroll">
          <!-- output -->
          <div #preview [innerHTML]="html$ | async"></div>
        </div>
      </div>
    </div>
    <ng-template #actionTemplate>
      <span class="flex-row">
        <span>
          <!-- TODO: Add label?? -->
          <input
            type="text"
            autocomplete="off"
            aria-label="File Name"
            placeholder="File Name"
            (change)="name$.next(nameInput.value)"
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
        <!-- 
      TODO: 
      1. name
      2. save
      3. delete
      -->
        Editor
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
    `,
    `
      #editor {
        border: solid 1px rgba(255, 255, 255, 0.12);
        height: 100%;
        padding: 0;
        margin: 0;
        resize: none;
        background: inherit;
        color: inherit;
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
  constructor(
    private headerActions: HeaderActionsService,
    private appSettingService: AppSettingsService,
    private editorMarkdownService: EditorMarkdownService,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.html$ = this.getHtml$();
    this.editorStyles$ = this.appSettingService.settings$;
    // setup the default value, this needs to be called along with the passed default
    this.content$.next(this.editorMarkdownService.DEFAULT);
  }

  ngOnDestroy() {
    this.headerActions.clear();
  }

  public save() {
    const name = this.name$.value;
    const content = this.content$.value;
    this.fileService.save({
      name,
      content
    });
    // TODO: notify user
  }
  public remove() {
    // TODO: add later
  }
  private getHtml$(): Observable<string> {
    return this.content$.pipe(
      map((str) => this.editorMarkdownService.convert(str))
    );
  }
}
