import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as CustomerActions from './customer.actions'
import { DataService } from "../../../shared/data.service";
import { catchError, concatMap, of, switchMap, tap } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable()
export class CustomerEffects {

    constructor(
        private actions$: Actions,
        private readonly dataService: DataService,
        private readonly _snackBar: MatSnackBar,
        private readonly router: Router,
    ) { }

    addCustomerStart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CustomerActions.addCustomerStart),
            switchMap(action => {
                return this.dataService.addCustomer(action.customer).pipe(
                    concatMap(() => [
                        // If the http call was successful we are good
                        CustomerActions.clearCustomer(),
                        CustomerActions.addCustomerEnd({name: `${action.customer.primaryFirstName} ${action.customer.primaryLastName}`}),
                    ]),
                    catchError(error => {
                        return of(CustomerActions.addCustomerFailure({ error }))
                    })
                )
            })
        )
    )

    /* addCustomerEnd$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CustomerActions.addCustomerEnd),
            tap((action) => {
                this._snackBar.open(`${action.name} was added successfuly`, 'Close', {
                    duration: 5000,
                })
                this.router.navigate([`/main/customers`]);
            })
        ),
        { dispatch: false }
    ); */
}