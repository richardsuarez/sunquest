import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Customer, SearchCriteria } from '../modules/customers/models/customer.models';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore, private fireStorage: AngularFireStorage) { }

  // #region Customer

  addCustomer(customer: Customer): Observable<void> {
    const id = this.afs.createId();
    customer.id = id;
    return from(
      this.afs.collection<Customer>('/Students').doc(id).set(customer)
    );
  }

  //getCustomerList(criteria: SearchCriteria): Observable

  // #endregion Customer
}
