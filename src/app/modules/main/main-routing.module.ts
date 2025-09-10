import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CustomerComponent } from '../customers/container/customer.component';
import { BookComponent } from '../book/book.component';
import { EditCustomerComponent } from '../customers/form/edit-customer.component';
import { CanDeactivateGuard } from '../../shared/can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'customers',
        component: CustomerComponent,
      },
      {
        path: 'customers/:crud',
        component: EditCustomerComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: 'book',
        component: BookComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
