import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../shared/auth.service';
import packageJson from '../../../../package.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy{

  isMobile!: boolean; 
  isVisible = false;
  appVersion = packageJson.version

  destroy$ = new Subject<void>();
  constructor(
    readonly breakpoints: BreakpointObserver,
    private readonly auth: AuthService,
   ){}

   ngOnInit(){
    this.breakpoints.observe([
      Breakpoints.HandsetPortrait, 
      Breakpoints.HandsetLandscape
    ]).pipe(takeUntil(this.destroy$))
    .subscribe(result => {
      this.isMobile = result.matches;
    })
   }

   ngOnDestroy(){
    this.destroy$.complete()
   }

  form_login: FormGroup<{
    email: FormControl<string | null>,
    password: FormControl<string | null>,
  }> = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('',)
  })

  signIn(){
    if(this.form_login.valid && 
      this.form_login.controls.email.value && 
      this.form_login.controls.password.value
    ){
      this.auth.login(this.form_login.controls.email.value, this.form_login.controls.password.value)
    } else {
      this.form_login.markAllAsTouched();
    }
  }
}
