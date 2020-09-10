import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatSnackBarConfig,
  MAT_SNACK_BAR_DATA
} from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { SideNavModule } from './core/side-nav/side-nav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    // Core Modules
    HeaderModule,
    SideNavModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: {
        duration: 4000
      } as MatSnackBarConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
