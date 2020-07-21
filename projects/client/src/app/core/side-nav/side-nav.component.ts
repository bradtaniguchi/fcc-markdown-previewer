import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `
    <div>
      <mat-nav-list dense>
        <a mat-list-item [routerLink]="['/editor']">
          <span>
            <mat-icon>
              create
            </mat-icon>
          </span>
          <span matLine>
            Create
          </span>
        </a>
        <a mat-list-item [routerLink]="['/files']">
          <span>
            <mat-icon>
              folder
            </mat-icon>
          </span>
          <span matLine>
            Files
          </span>
        </a>
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
        <mat-divider></mat-divider>
        <!-- TODO: Add list of files "opened" here -->
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
