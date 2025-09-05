import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { ConfirmationComponent } from '../../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.scss'
})
export class EditCustomerComponent implements OnInit, OnDestroy{
  crud!: string;
  destroy$ = new Subject<void>()
  isMobile!: boolean;

  customerForm: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    middleName: FormControl<string | null>;
    title: FormControl<string | null>;
    email: FormControl<string | null>;
    telephone: FormControl<string | null>;
    phone: FormControl<string | null>;
    address1: FormControl<string | null>;
    address2: FormControl<string | null>;
    bldg: FormControl<string | null>;
    apt: FormControl<string | null>;
    city: FormControl<string | null>;
    state: FormControl<string | null>;
    zipCode: FormControl<string | null>;
  }> = new FormGroup({
    firstName: new FormControl<string | null>('', Validators.required),
    lastName: new FormControl<string | null>('', Validators.required),
    middleName: new FormControl<string | null>(''),
    title: new FormControl<string | null>('', Validators.required),
    email: new FormControl<string | null>('', Validators.email),
    telephone: new FormControl<string | null>(''),
    phone: new FormControl<string | null>('', Validators.required),
    address1: new FormControl<string | null>(''),
    address2: new FormControl<string | null>(''),
    bldg: new FormControl<string | null>(''),
    apt: new FormControl<string | null>(''),
    city: new FormControl<string | null>(''),
    state: new FormControl<string | null>(''),
    zipCode: new FormControl<string | null>(''),
  })

  constructor(
    readonly breakpoints: BreakpointObserver,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly matDialog: MatDialog,
  ){}

  ngOnInit(){
    this.crud = this.route.snapshot.paramMap.get('crud') ?? '';
    this.breakpoints.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.isMobile = res.matches;
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean {
      // only show the popup if the user modifies any fields AND DISCREPANCY VIEW MODAL IN STATE IS NOT NULL 
      // when discrepancyViewModel is null means user SUBMITS form for add/edit discrepancy and we won't show popup message when submit
      if(this.customerForm && !this.customerForm.pristine){
        //&& this.currentDiscrepancyInState){
        const dialogRef = this.matDialog.open(ConfirmationComponent);
        return dialogRef.afterClosed().pipe(
          map(result => {
            switch(result){
              case 'Success': this.onSubmit(); return false;
              case 'Cancel': return true;
              default: return false;
            }  // allow navigation if the user click discard button or click outside modal
          }))
      }
      return true;
    }

  crudTitle(){
    return this.crud === 'new' ? 'New' : 'Edit';
  }

  navigateBack(){
    this.router.navigate(['customers/'])
  }

  onSubmit(){

  }
}
