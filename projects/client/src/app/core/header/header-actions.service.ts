import { Injectable, TemplateRef } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderActionsService {
  /**
   * The current template to display
   */
  private _templateRef$ = new ReplaySubject<TemplateRef<any>>(1);

  public get templateRef$(): Observable<TemplateRef<any>> {
    return this._templateRef$.asObservable();
  }

  public setTemplateRef$(templateRef: TemplateRef<any>) {
    this._templateRef$.next(templateRef);
  }

  public clear() {
    this._templateRef$.next();
  }
  // TODO: Add logic to render a dynamic component in the header
}
