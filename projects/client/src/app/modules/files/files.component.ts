import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { File } from '../../models/file';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-files',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let file of files">
        <div matLine>
          <span>
            <!-- TODO: add checkbox -->
          </span>
          <span>
            {{ file.name }}
          </span>
          <span>
            <!-- TODO: add menu button -->
          </span>
        </div>
      </mat-list-item>
    </mat-list>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilesComponent implements OnInit {
  public files$!: Observable<File[]>;
  constructor() {}

  ngOnInit(): void {}
}
