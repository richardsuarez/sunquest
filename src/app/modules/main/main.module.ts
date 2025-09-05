import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from '../book/book.component';
import { CustomerComponent } from '../customers/customer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditCustomerComponent } from '../customers/form/edit-customer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ConfirmationComponent } from '../../shared/confirmation/confirmation.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    DashboardComponent,
    CustomerComponent,
    BookComponent,
    EditCustomerComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    MatMenuModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconButton,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
]
})
export class MainModule { }
