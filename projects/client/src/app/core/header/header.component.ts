import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary" class="flex-layout-row">
      <span class="flex-100">
        <button
          aria-label="Toggle navigation Bar"
          title="Toggle navigation bar"
          type="button"
          mat-icon-button
        >
          <mat-icon>menu</mat-icon>
        </button>
        <span>
          <!-- TODO: Add dynamic component here -->
        </span>
      </span>
      <span>
        <a
          aria-label="Settings"
          title="Settings"
          [routerLink]="['/settings']"
          mat-icon-button
        >
          <mat-icon>settings</mat-icon>
        </a>
      </span>
    </mat-toolbar>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
