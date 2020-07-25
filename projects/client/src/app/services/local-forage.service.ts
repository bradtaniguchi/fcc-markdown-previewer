import { Injectable } from '@angular/core';
import localForage from 'localforage';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalForageService {
  /**
   * The underlying instance of localForage.
   */
  public instance = localForage;
  /**
   * If the local forage is ready
   */
  public ready$ = from(localForage.ready());
  constructor() {
    localForage.config({
      driver: localForage.INDEXEDDB, // Force WebSQL; same as using setDriver()
      name: 'fcc-markdown-previewer',
      version: 1.0,
      storeName: 'client_data', // Should be alphanumeric, with underscores.
      description: 'client-side data'
    });
  }

  public get<T = any>(key: string): Promise<T> {
    return localForage.getItem(key);
  }

  public setItem<T = any>(key: string, value: T): Promise<T> {
    return localForage.setItem(key, value);
  }

  public removeItem(key: string): Promise<void> {
    return localForage.removeItem(key);
  }

  public clear(): Promise<void> {
    return localForage.clear();
  }
}
