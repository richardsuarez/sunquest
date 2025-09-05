export interface Customer {
    firstName: string;
    lastName: string;
    middleName: string;
    title: string;
    email: string;
    telephone: string;
    phone: string;
    address1: string;
    address2: string;
    bldg: string;
    apt: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface SavingCustomer extends Customer{
    id: string;
}