import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { SavingCustomer } from '../modules/customers/models/customer.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }

  // #region Customer

  addCustomer(customer: SavingCustomer): Observable<DocumentChangeAction<unknown>[]>{
    customer.id = this.afs.createId();
    return this.afs.collection('/Students').snapshotChanges()
  }

  // #endregion Customer
}
