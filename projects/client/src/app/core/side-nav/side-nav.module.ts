import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    // Angular Material
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [SideNavComponent]
})
export class SideNavModule {}
