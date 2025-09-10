import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CUSTOMER_NAME, CustomerState } from "./customer.state";

export const customerFeature = createFeatureSelector<CustomerState>(CUSTOMER_NAME)

export const loading = createSelector(customerFeature, (state) => {return state.loading});
export const criteria = createSelector(customerFeature, (state) => {return state.criteria});
export const customerList = createSelector(customerFeature, (state) => {return state.customerList});
export const savingCustomer = createSelector(customerFeature, (state) => {return state.savingCustomer});