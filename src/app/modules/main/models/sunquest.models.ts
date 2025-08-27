export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string;
    title: string;
    email: string;
    cel: string;
    phone: string;
    address1: string;
    address2: string;
    bldg: string;
    apt: string;
    city: string;
    state: string;
    zipCode: number;
}

export interface Vehicle {
    make: string;
    model: string;
    year: number;
    plateNumber: string;
    state: string;
    VIN: string;
    color: string;
    weight: number;
}

export interface CustomerVehicle {
    customerId: string;
    customerFirstName: string;
    customerLastName: string;
    customerPhone: string;
    customerEmail: string;
    vehicleMake: string;
    vehicleModel: string;
    VehicleYear: string;
    vehicleVIN: string;
    vehicleColor: string;
    vehicleWeight: number
}

export interface Booking {
    number: string;
    date: Date;
    season: string;
    customerName: string;
    
}