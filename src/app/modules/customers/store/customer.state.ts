import { AppError } from "../../../shared/app-error.model";
import { SearchCriteria, Customer } from "../models/customer.models";

export const CUSTOMER_NAME = 'customer'

export interface CustomerState {
    loading: boolean;
    customerList: Customer[];
    customerMS: Customer | null;
    criteria: SearchCriteria;
    savingCustomer: boolean;

    error: AppError
}