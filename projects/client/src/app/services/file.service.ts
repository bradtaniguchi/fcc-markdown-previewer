import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import shortId from 'shortid';
import { StorageKeys } from '../constants/storage-keys';
import { File } from '../models/file';
import { LocalForageService } from './local-forage.service';

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
  public async create(file: Pick<File, 'name' | 'content'>): Promise<File> {
    const files = await this.localForage.get<Record<string, File>>(
      StorageKeys.FILES
    );
    const id = shortId();
    const newFile: File = {
      ...file,
      id
    };
    const newFiles = await this.localForage.setItem<Record<string, File>>(
      StorageKeys.FILES,
      {
        ...files,
        [id]: newFile
      }
    );
    this.files$.next(newFiles);
    return newFile;
  }

  /**
   * Updates the given file
   */
  public async update(file: File): Promise<File> {
    const files = await this.localForage.get<Record<string, File>>(
      StorageKeys.FILES
    );
    const newFiles = await this.localForage.setItem(StorageKeys.FILES, {
      ...files,
      [file.id]: file
    });
    this.files$.next(newFiles);
    return file;
  }

  /**
   * Removes the file from localStorage
   */
  public async remove(file: File | string): Promise<File> {
    const files = await this.localForage.get<Record<string, File>>(
      StorageKeys.FILES
    );
    const id = typeof file === 'string' ? file : file.id;
    const existingFile = files[id];
    delete files[id];
    const newFiles = await this.localForage.setItem(StorageKeys.FILES, files);
    this.files$.next(newFiles);
    return existingFile;
  }
}
