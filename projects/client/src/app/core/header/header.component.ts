import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  TemplateRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderActionsService } from './header-actions.service';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary" class="flex-layout-row">
      <span class="flex-100">
        <button
          aria-label="Toggle navigation Bar"
          title="Toggle navigation bar"
          type="button"
          mat-icon-button
          (click)="toggle.emit()"
        >
          <mat-icon>menu</mat-icon>
        </button>
        <!-- NOTE Not sure why this is needed -->
        <span class="flex-layout-row" style="display: inline-flex">
          <!-- TODO: Add dynamic component here -->
          <ng-container *ngTemplateOutlet="headerActions$ | async">
          </ng-container>
        </span>
      </span>
      <span>
        <a
          aria-label="Settings"
          title="Settings"
          [routerLink]="['/settings']"
          mat-icon-button
        >
          <mat-icon>settings</mat-icon>
        </a>
      </span>
    </mat-toolbar>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter();
  public headerActions$!: Observable<TemplateRef<any>>;
  constructor(private headerActions: HeaderActionsService) {}

  ngOnInit(): void {
    this.headerActions$ = this.getHeaderActions$();
  }

  private getHeaderActions$(): Observable<TemplateRef<any>> {
    return this.headerActions.templateRef$;
  }
}
