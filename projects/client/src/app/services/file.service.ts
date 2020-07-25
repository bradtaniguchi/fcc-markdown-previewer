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
    localForage.get<Record<string, File>>(StorageKeys.FILES).then((files) => {
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
  public async save(
    file: Pick<File, 'name' | 'content'>
  ): Promise<Record<string, File>> {
    const files = await this.localForage.get<Record<string, File>>(
      StorageKeys.FILES
    );
    const id = shortId();
    return this.localForage.setItem(StorageKeys.FILES, {
      ...files,
      [id]: {
        ...file,
        id
      }
    });
  }

  /**
   * Updates the given file
   */
  public async update(file: File): Promise<any> {
    const files = await this.localForage.get<Record<string, File>>(
      StorageKeys.FILES
    );
    return this.localForage.setItem(StorageKeys.FILES, {
      ...files,
      [file.id]: file
    });
  }
}
