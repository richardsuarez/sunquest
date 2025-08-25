import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  isMobile!: boolean
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

}
