import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CUSTOMER_NAME } from "./store/customer.state";
import { customerReducer } from "./store/customer.reducers";
import { StoreModule } from "@ngrx/store";
import { CustomerEffects } from "./store/customer.effects";
import { EffectsModule } from "@ngrx/effects";
import { CustomerComponent } from "./container/customer.component";
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { EditCustomerComponent } from "./form/edit-customer.component";


@NgModule({
    declarations: [
        CustomerComponent,
        EditCustomerComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature(CUSTOMER_NAME, customerReducer),
        EffectsModule.forFeature([CustomerEffects]),
        MatMenuModule,
        MatIconModule,
        RouterLink,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconButton,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatCardModule,
        MatSnackBarModule
    ]
})
export class CustomerModule { }