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
    MainRoutingModule,
    MatMenuModule,
    MatIconModule,
    RouterLink
  ]
})
export class MainModule { }
