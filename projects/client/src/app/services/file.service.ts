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
  public files$ = new ReplaySubject<Record<string, File>>(1);
  constructor(private localForage: LocalForageService) {
    localForage
      .get<Record<string, File>>(StorageKeys.FILES)
      .pipe(take(1))
      .subscribe((files) => {
        if (files) {
          return this.files$.next(files);
        }
        this.files$.next({});
        this.localForage.setItem<Record<string, File>>(StorageKeys.FILES, {});
      });
  }

  /**
   * creates the given file
   */
  public save(file: Pick<File, 'name' | 'content'>) {
    this.localForage
      .get<File[]>(StorageKeys.FILES)
      .pipe(take(1))
      .subscribe((files) =>
        this.localForage.setItem(StorageKeys.FILES, {
          ...files,
          [shortId()]: file
        })
      );
  }

  /**
   * Updates the given file
   */
  public update(file: File) {
    this.localForage
      .get<Record<string, File>>(StorageKeys.FILES)
      .pipe(take(1))
      .subscribe((files) =>
        this.localForage.setItem(StorageKeys.FILES, {
          ...files,
          [file.id]: file
        })
      );
  }
}
