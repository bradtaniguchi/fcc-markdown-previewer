import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  OnDestroy
} from '@angular/core';
import { HeaderActionsService } from '../../core/header/header-actions.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-editor',
  template: `
    <div class="full-height">
      <!-- TODO: Add editor input field here -->
      <div class="flex-layout-row full-height">
        <div class="flex-50">
          <!-- text content -->
          <textarea
            [(ngModel)]="content"
            class="full-width"
            id="editor"
            [style]="editorStyles$ | async"
          ></textarea>
          <div class="editor-controls flex-layout-row">
            <span
              ><button type="button" class="editor-button">Layout</button></span
            >
            <span
              ><button type="button" class="editor-button">
                Font-Size
              </button></span
            >
            <span
              ><button type="button" class="editor-button">Font</button></span
            >
          </div>
        </div>
        <div class="flex-50">
          <!-- output -->
          <div #preview>
            {{ content }}
          </div>
        </div>
      </div>
    </div>
    <ng-template #actionTemplate>
      <span>
        Editor
      </span>
    </ng-template>
  `,
  styles: [
    `
      .editor-controls {
        border: solid 1px rgba(255, 255, 255, 0.12);
        height: 32px;
        max-height: 32px;
        width: 100%;
      }
    `,
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
        height: calc(100% - 37px);
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
  //TODO: style object to apply different things to the input field.
  public editorStyles$!: Observable<object>;
  public content!: string;
  constructor(private headerActions: HeaderActionsService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.headerActions.clear();
  }
}
