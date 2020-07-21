import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorActionsComponent } from './editor-actions.component';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [EditorComponent, EditorActionsComponent],
  imports: [CommonModule, EditorRoutingModule, FormsModule],

  exports: [EditorComponent]
})
export class EditorModule {}
