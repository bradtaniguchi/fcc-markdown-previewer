import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { StorageKeys } from '../constants/storage-keys';
import { AppSettings } from '../models/app-settings';
import { LocalForageService } from './local-forage.service';
@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  public static DEFAULT_SETTINGS: AppSettings = {
    files: {},
    openedFiles: [],
    fontSize: '14px'
  };
  public settings$ = new ReplaySubject<AppSettings>(1);

  constructor(private localForage: LocalForageService) {
    localForage.get(StorageKeys.SETTINGS).then((settings: AppSettings) => {
      console.log(settings);
      if (settings) {
        return this.settings$.next(settings);
      }
      this.settings$.next(AppSettingsService.DEFAULT_SETTINGS);
      this.localForage.setItem(
        StorageKeys.SETTINGS,
        AppSettingsService.DEFAULT_SETTINGS
      );
    });
  }
  /**
   * Updates all or part of the app-settings
   */
  public update(settings: Partial<AppSettings>) {
    this.localForage
      .get<AppSettings>(StorageKeys.SETTINGS)
      .then((prevSettings) =>
        this.localForage.setItem(StorageKeys.FILES, {
          ...prevSettings,
          ...settings
        })
      );
  }
}
