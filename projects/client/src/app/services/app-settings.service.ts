import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AppSettings } from '../models/app-settings';
import { LocalForageService } from './local-forage.service';
import { take, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  public static DEFAULT_SETTINGS: AppSettings = {
    files: [],
    openedFiles: []
  };
  public settings$ = new ReplaySubject<AppSettings>(1);

  constructor(private localForage: LocalForageService) {
    localForage
      .get('settings')
      .pipe(tap(console.log), take(1))
      .subscribe((settings) => {
        if (settings) {
          return this.settings$.next(settings);
        }
        this.settings$.next(AppSettingsService.DEFAULT_SETTINGS);
        this.localForage.setItem(
          'settings',
          AppSettingsService.DEFAULT_SETTINGS
        );
      });
    // TODO: load initial data from localForage, otherwise load defaults
  }
}
