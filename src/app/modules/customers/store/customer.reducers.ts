import { createReducer, on } from "@ngrx/store";
import * as CustomerActions from './customer.actions'
import { CustomerState } from "./customer.state";
import { state } from "@angular/animations";

const initialState: CustomerState = {
    loading: false,
    customerList: [],
    customerMS: null,
    criteria: {
        searchValue: '',
        pagination: {
            paginationNumber: 1,
            itemsPerPage: 50
        }
    },
    savingCustomer: false,
    error: {title: '', message: ''},
}

export const customerReducer = createReducer(
    initialState,

    // #region Customer List
    on(CustomerActions.getCustomerListStart, (state, action) => ({
        ...state,
        loading: true,
        criteria: action.criteria
    })),

    on(CustomerActions.getCustomerListEnd, (state, action) => ({
        ...state,
        loading: false,
        customerList: action.customerList,
    })),

    on(CustomerActions.getCustomerListFailure, (state, action) => ({
        ...state,
        loagin: false,
        error: action.error
    })),
    // #endregion Customer List

    // #region add new Customer
        on(CustomerActions.addCustomerStart, (state) => ({
            ...state,
            savingCustomer: true,
        })),

        on(CustomerActions.addCustomerEnd, (state) => ({
            ...state,
            savingCustomer: false,
        })),
        on(CustomerActions.addCustomerFailure, (state, action) => ({
            ...state,
            savingCustomer: false,
            error: action.error,
        })),
    // #endregion add new Customer
)