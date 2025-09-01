import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit, OnDestroy{

  isMobile!: boolean
  destroy$ = new Subject<void>()
  
  searchCustomer = new FormControl<string | null>('')
  constructor(
    private readonly breakpoints: BreakpointObserver,
    private router: Router,
  ){}

  ngOnInit(){
    this.breakpoints.observe([
      Breakpoints.HandsetPortrait, 
      Breakpoints.HandsetLandscape
    ]).subscribe(res => {
      this.isMobile = res.matches
    })
  }

  ngOnDestroy(){
    this.destroy$.complete()
  }

  addCustomer(){
    this.router.navigate(['/customers/new'])
  }

}
