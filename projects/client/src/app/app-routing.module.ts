import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren: () =>
      import('./modules/editor/editor.module').then((m) => m.EditorModule)
  },
  {
    path: 'editor/:id',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/editor/editor.module').then((m) => m.EditorModule)
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
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
