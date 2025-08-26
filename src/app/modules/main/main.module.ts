import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './container/main.component';
import { MainRoutingModule } from './main-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { BookComponent } from './components/book/book.component';
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    DashboardComponent,
    UsersComponent,
    BookComponent
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
    MatIconButton
]
})
export class MainModule { }
