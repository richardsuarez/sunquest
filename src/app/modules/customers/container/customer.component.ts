import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Customer, SearchCriteria } from '../models/customer.models';

import { CustomerState } from '../store/customer.state';
import { criteria, customerList } from '../store/customer.selector';
import * as CustomerActions from '../store/customer.actions'

@Component({
  selector: 'app-customers',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit, OnDestroy{

  isMobile!: boolean
  destroy$ = new Subject<void>()
  customerListObserver$!: Observable<Customer[]>;
  criteria$!: Observable<SearchCriteria>;
  
  searchCustomer = new FormControl<string | null>('')
  constructor(
    private readonly breakpoints: BreakpointObserver,
    private readonly router: Router,
    private readonly store: Store<CustomerState>,
  ){
    this.customerListObserver$ = store.select(customerList)
    this.criteria$ = this.store.select(criteria)
  }

  ngOnInit(){
    this.breakpoints.observe([
      Breakpoints.HandsetPortrait, 
      Breakpoints.HandsetLandscape
    ]).subscribe(res => {
      this.isMobile = res.matches
    });

    this.criteria$.pipe(takeUntil(this.destroy$))
      .subscribe((criteria) => {
        this.store.dispatch(CustomerActions.getCustomerListStart({criteria}))
      })
  }

  ngOnDestroy(){
    this.destroy$.complete()
  }

  addCustomer(){
    this.router.navigate(['/customers/new'])
  }

  formatLabelEmail(email: string | null){
    return `mailto:${email}`
  }

  formatLabelPhone(phone: string | null){
    return `tel:${phone}`;
  }

}
