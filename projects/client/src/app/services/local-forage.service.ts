import { Injectable } from '@angular/core';
import localForage from 'localforage';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalForageService {
  /**
   * The underlying instance of localForage.
   */
  public instance = localForage;
  public ready$ = from(localForage.ready);
  constructor() {
    localForage.config({
      driver: localForage.WEBSQL, // Force WebSQL; same as using setDriver()
      name: 'fcc-markdown-previewer',
      version: 1.0,
      size: 4980736, // Size of database, in bytes. WebSQL-only for now.
      storeName: 'client_data', // Should be alphanumeric, with underscores.
      description: 'client-side data'
    });
  }

  public get<T = any>(key: string): Observable<T> {
    return from(localForage.getItem(key)) as any;
  }

  public setItem<T = any>(key: string, value: T): Observable<T> {
    return from(localForage.setItem(key, value));
  }

  public removeItem(key: string) {
    return from(localForage.removeItem(key));
  }

  public clear() {
    return from(localForage.clear());
  }
}
