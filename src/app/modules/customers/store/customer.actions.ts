import { createAction, props } from "@ngrx/store";
import { SearchCriteria, Customer } from "../models/customer.models";
import { AppError } from "../../../shared/app-error.model";

// #region get Customer list
    export const getCustomerListStart = createAction(
        '[Customer] Get the list of customers',
        props<{criteria: SearchCriteria}>()
    );

    export const getCustomerListEnd = createAction(
        '[Customer] Successful get the list of customers',
        props<{customerList: Customer[]}>()
    );

    export const getCustomerListFailure = createAction(
        '[Customer] Failure getting the list of customers',
        props<{error: AppError}>()
    );
// #endregion get Customer list

// #region add Customer
export const addCustomerStart = createAction(
        '[Customer] Start adding new customer',
        props<{customer: Customer}>()
    );

    export const addCustomerEnd = createAction(
        '[Customer] End adding new customer',
        props<{name: string}>()
    );

    export const addCustomerFailure = createAction(
        '[Customer] Failure adding new customer',
        props<{error: AppError}>()
    );
// #endregion add Customer

export const clearCustomer = createAction(
    '[Customer] Clear current customer in state'
)