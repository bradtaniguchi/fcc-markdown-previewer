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
    path: 'editor',
    pathMatch: 'full',
    component: EditorComponent
  },
  {
    path: 'editor/:id',
    pathMatch: 'full',
    component: EditorComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/editor'
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
