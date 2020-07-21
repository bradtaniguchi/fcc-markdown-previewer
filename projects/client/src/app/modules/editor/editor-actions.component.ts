import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-editor-actions',
  template: `
    <p>
      editor-actions works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorActionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
