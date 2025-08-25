import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
				loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
				pathMatch: 'full',
      },
      {
        path: 'main',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
