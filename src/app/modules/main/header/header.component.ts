import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{

  isMobile!: boolean
  destroy$ = new Subject<void>()
  constructor(
    private readonly breakpoints: BreakpointObserver,
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

}
