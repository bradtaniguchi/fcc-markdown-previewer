import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './modules/editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent
  },
  {
    path: 'files',
    loadChildren: () =>
      import('./modules/files/files.module').then((m) => m.FilesModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then((m) => m.SettingsModule)
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
