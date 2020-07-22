import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { AppSettings } from '../models/app-settings';
import { LocalForageService } from './local-forage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  public settings$ = new ReplaySubject<AppSettings>(1);

  constructor(private localForage: LocalForageService) {
    // TODO: load initial data from localForage, otherwise load defaults
  }
}
