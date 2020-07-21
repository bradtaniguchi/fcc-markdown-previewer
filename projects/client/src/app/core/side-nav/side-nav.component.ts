import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `
    <div>
      <mat-nav-list dense>
        <a mat-list-item [routerLink]="['/settings']">
          <span>
            <mat-icon>
              settings
            </mat-icon>
          </span>
          <span matLine>
            Settings
          </span>
        </a>
      </mat-nav-list>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
