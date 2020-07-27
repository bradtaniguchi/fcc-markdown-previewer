import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import shortId from 'shortid';
import { StorageKeys } from '../constants/storage-keys';
import { File } from '../models/file';
import { LocalForageService } from './local-forage.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  /**
   * An observable of all the files
   */
  public files$ = new ReplaySubject<Record<string, File>>(1);

  constructor(private localForage: LocalForageService) {
    this.localForage.removeAll$.subscribe(() => this.files$.next({}));
    this.files$.subscribe((files) =>
      this.localForage.setItem<Record<string, File>>(StorageKeys.FILES, files)
    );
    localForage.get<Record<string, File>>(StorageKeys.FILES).then((files) => {
      if (files) {
        return this.files$.next(files);
      }
      this.files$.next({});
    });
  }

  public get(id: string): Observable<File | undefined> {
    return this.files$.pipe(map((files) => files[id]));
  }

  /**
   * Creates the given file
   */
  public create(file: Pick<File, 'name' | 'content'>): Observable<File> {
    const id = shortId();
    return this.files$.pipe(
      take(1),
      map(
        (files) =>
          ({
            ...files,
            [id]: {
              ...file,
              id
            }
          } as Record<string, File>)
      ),
      tap((files) => this.files$.next(files)),
      switchMap(() => this.get(id) as Observable<File>)
    );
  }

  /**
   * Updates the given file
   */
  public update(file: File): Observable<File> {
    return this.files$.pipe(
      take(1),
      map((files) => ({ ...files, [file.id]: file })),
      tap((files) => this.files$.next(files)),
      switchMap(() => this.get(file.id) as Observable<File>)
    );
  }

  /**
   * Removes the file from localStorage
   */
  public remove(id: string): Observable<undefined> {
    return this.files$.pipe(
      take(1),
      map((files) => {
        delete files[id];
        return files;
      }),
      tap((files) => this.files$.next(files)),
      switchMap(() => this.get(id) as Observable<undefined>)
    );
  }
  /**
   * Removes all fields
   */
  public removeAll() {
    this.files$.pipe(
      take(1),
      tap(() => this.files$.next({}))
    );
  }
  /**
   * Returns an observable based upon the given params.
   */
  public searchFiles$(params: {
    orderBy?: keyof File;
    query?: string;
  }): Observable<File[]> {
    const { query, orderBy } = params;
    // TODO:
    return this.files$.pipe(map((files) => Object.values(files)));
  }

  /**
   * Removes multiple, then returns the still existing
   */
  public removeMultiple(ids: string[]): Observable<Record<string, File>> {
    return this.files$.pipe(
      map((files) => {
        ids.forEach((id) => delete files[id]);
        return { ...files };
      })
    );
  }
}
