import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from '../book/book.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from '../../shared/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    BookComponent,
    PopupComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
]
})
export class MainModule { }
