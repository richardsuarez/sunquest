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
        path: 'home',
        loadChildren: () => import('./modules/home-page/home.module').then(m => m.HomePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
