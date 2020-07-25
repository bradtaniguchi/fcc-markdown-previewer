import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './modules/editor/editor.component';

const routes: Routes = [
  {
    path: 'files',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/files/files.module').then((m) => m.FilesModule)
  },
  {
    path: 'settings',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/settings/settings.module').then((m) => m.SettingsModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: EditorComponent
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: EditorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
