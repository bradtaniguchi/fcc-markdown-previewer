import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppSettingsService } from './services/app-settings.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  template: `
    <div class="mat-typography full-height" [ngClass]="(theme$ | async) || ''">
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
export class AppComponent implements OnInit {
  public theme$!: Observable<string>;
  constructor(
    private appSettings: AppSettingsService,
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit() {
    this.theme$ = this.getTheme$();
    this.theme$.subscribe((theme) => {
      const containerElement = this.overlayContainer.getContainerElement();
      containerElement.className = 'cdk-overlay-container';
      containerElement.classList.add(theme);
    });
  }

  private getTheme$() {
    return this.appSettings.settings$.pipe(map(({ theme }) => theme));
  }
}
