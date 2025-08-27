import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Customer } from '../modules/main/models/sunquest.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private store: AngularFirestore
  ) { }

  addCustomer(customer: Customer){
    customer.id = this.store.createId();
    return this.store.collection('/Customer').add(customer);
  }

  getAllCustomer(){
    return this.store.collection('/Customer').snapshotChanges();
  }

  deleteCustomer(customer: Customer){
    return this.store.doc('/Customer/' + customer.id).delete();
  }

  updateCustomer(customer: Customer){
    this.deleteCustomer(customer);
    this.addCustomer(customer);
  }
}
