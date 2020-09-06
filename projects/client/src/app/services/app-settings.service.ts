import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { StorageKeys } from '../constants/storage-keys';
import { AppSettings } from '../models/app-settings';
import { LocalForageService } from './local-forage.service';
import { take, map, tap, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  public static DEFAULT_SETTINGS: AppSettings = {
    fontSize: '14px',
    theme: 'dark-theme',
    testSuiteHidden: true
  };
  public settings$ = new ReplaySubject<AppSettings>(1);

  constructor(private localForage: LocalForageService) {
    this.localForage.removeAll$.subscribe(() =>
      this.settings$.next(AppSettingsService.DEFAULT_SETTINGS)
    );
    this.settings$.subscribe((settings) =>
      this.localForage.setItem(StorageKeys.SETTINGS, settings)
    );
    localForage.get(StorageKeys.SETTINGS).then((settings: AppSettings) => {
      if (settings) {
        return this.settings$.next(settings);
      }
      this.settings$.next(AppSettingsService.DEFAULT_SETTINGS);
    });
  }
  /**
   * Updates all or part of the app-settings
   */
  public update(settings: Partial<AppSettings>): Observable<AppSettings> {
    return this.settings$.pipe(
      take(1),
      map((oldSettings) => ({ ...oldSettings, ...settings })),
      tap((settings) => this.settings$.next(settings)),
      switchMap(() => this.settings$)
    );
  }
  /**
   * Resets all settings to their defaults
   */
  public setDefaults() {
    this.settings$.next(AppSettingsService.DEFAULT_SETTINGS);
    return this.settings$;
  }
}
