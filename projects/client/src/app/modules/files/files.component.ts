import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-files',
  template: `
    <p>
      files works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
