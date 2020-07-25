import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorActionsComponent } from './editor-actions.component';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [EditorComponent, EditorActionsComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FormsModule,
    // Angular Material
    MatButtonModule,
    MatIconModule
  ],

  exports: [EditorComponent]
})
export class EditorModule {}
