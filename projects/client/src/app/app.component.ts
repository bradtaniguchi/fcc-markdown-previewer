import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="mat-typography dark-theme full-height">
      <app-header (toggle)="sidenav.toggle()"></app-header>
      <mat-sidenav-container>
        <mat-sidenav #sidenav mode="side" [opened]="true">
          <app-side-nav></app-side-nav>
        </mat-sidenav>
        <mat-sidenav-content>
          <main>
            <router-outlet></router-outlet>
          </main>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [
    `
      mat-sidenav {
        width: 15vw;
      }
    `,
    `
      mat-sidenav-container {
        height: calc(100% - 64px);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
