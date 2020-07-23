import { Injectable } from '@angular/core';
import { AppSettingsService } from './app-settings.service';
import { File } from '../models/file';
import { LocalForageService } from './local-forage.service';
import { StorageKeys } from '../constants/storage-keys';
import { take } from 'rxjs/operators';
import shortId from 'shortid';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  public files$ = new ReplaySubject<File[]>(1);
  constructor(private localForage: LocalForageService) {
    localForage
      .get(StorageKeys.FILES)
      .pipe(take(1))
      .subscribe((files) => {
        if (files) {
          return this.files$.next(files);
        }
        this.files$.next([]);
        this.localForage.setItem(StorageKeys.FILES, []);
      });
  }

  /**
   * update/creates the given file
   */
  public save(file: File) {
    this.localForage
      .get<File[]>(StorageKeys.FILES)
      .pipe(take(1))
      .subscribe((files) => [
        ...(files || []),
        {
          id: shortId(),
          ...file
        }
      ]);
  }
}
