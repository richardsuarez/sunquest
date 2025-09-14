import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{

  isMobile!: boolean
  mobileMainMenu = false;
  mobileSubMenu = false;
  desktopMenu = false;
  destroy$ = new Subject<void>()
  constructor(
    private readonly breakpoints: BreakpointObserver,
    private readonly auth: AuthService,
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

  logout(){
    this.auth.logout()
  }

  toggleMobileMainMenu(){
    this.mobileMainMenu = !this.mobileMainMenu
  }

  toggleMobileSubMenu(){
    this.mobileSubMenu = !this.mobileSubMenu;
  }

  toggleDesktopMenu(){
    this.desktopMenu = !this.desktopMenu;
  }

}
