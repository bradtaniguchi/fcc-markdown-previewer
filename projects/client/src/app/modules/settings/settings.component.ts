import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettingsService } from '../../services/app-settings.service';
import { map, take } from 'rxjs/operators';
import { LocalForageService } from '../../services/local-forage.service';

@Component({
  selector: 'app-settings',
  template: `
    <div class="margin flex-column">
      <section>
        <mat-form-field class="full-width" appearance="outline">
          <mat-label>
            Font Size
          </mat-label>
          <select
            matNativeControl
            [value]="fontSize$ | async"
            (change)="changeFontSize(fontSizeInput.value)"
            #fontSizeInput
          >
            <option
              *ngFor="let fontSize of fontSizes"
              [value]="fontSize"
              [ngStyle]="{ fontSize: fontSize }"
            >
              {{ fontSize }}
            </option>
          </select>
          <mat-hint>
            The font size for the primary editor
          </mat-hint>
        </mat-form-field>
      </section>
      <section>
        <mat-form-field class="full-width" appearance="outline">
          <mat-label>
            App Theme
          </mat-label>
          <select
            matNativeControl
            [value]="theme$ | async"
            (change)="changeTheme(themeInput.value)"
            #themeInput
          >
            <option *ngFor="let theme of themes" [value]="theme.theme">
              {{ theme.display }}
            </option>
          </select>
          <mat-hint>
            The font size for the primary editor
          </mat-hint>
        </mat-form-field>
      </section>
      <section>
        <div class="margin flex-layout-row align-center">
          <button
            type="button"
            (click)="setDefaultSettings()"
            mat-raised-button
          >
            Reset to Defaults
          </button>
          <p>
            Resets all settings on this page to their defaults
          </p>
        </div>
        <div class="margin flex-layout-row align-center">
          <button
            type="button"
            (click)="resetAllData()"
            color="warn"
            mat-raised-button
          >
            Reset All Data
          </button>
          <p>
            Resets All data within the app, removes files and settings
          </p>
        </div>
      </section>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  public readonly fontSizes = ['14px', '16px'];
  public readonly themes = [
    {
      theme: 'dark-theme',
      display: 'Dark Theme'
    },
    {
      theme: 'light-theme',
      display: 'Light Theme'
    },
    {
      theme: 'hacker-theme',
      display: 'Hacker Theme'
    }
    // TODO: Add other themes
  ];
  public fontSize$!: Observable<string>;
  public theme$!: Observable<string>;
  constructor(
    private appSettingsService: AppSettingsService,
    private localForageService: LocalForageService
  ) {}

  ngOnInit(): void {
    this.fontSize$ = this.getFontSize$();
    this.theme$ = this.getTheme$();
  }

  setDefaultSettings() {
    this.appSettingsService
      .setDefaults()
      .pipe(take(1))
      .subscribe(() => {});
  }
  resetAllData() {
    this.localForageService.removeAll$.next();
    // TODO: show prompt
  }
  changeFontSize(fontSize: string) {
    this.appSettingsService
      .update({
        fontSize
      })
      .pipe(take(1))
      .subscribe(() => {});
  }
  changeTheme(theme: string) {
    this.appSettingsService
      .update({
        theme
      })
      .pipe(take(1))
      .subscribe(() => {});
  }
  private getFontSize$(): Observable<string> {
    return this.appSettingsService.settings$.pipe(
      map((settings) => settings.fontSize)
    );
  }
  private getTheme$(): Observable<string> {
    return this.appSettingsService.settings$.pipe(map(({ theme }) => theme));
  }
}
