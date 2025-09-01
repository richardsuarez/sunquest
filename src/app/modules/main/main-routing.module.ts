import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './container/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerComponent } from './components/customers/customer.component';
import { BookComponent } from './components/book/book.component';
import { EditCustomerComponent } from './forms/edit-customer/edit-customer.component';
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
