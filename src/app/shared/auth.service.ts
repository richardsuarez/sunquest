import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
  ) { }

  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then( () => {
      localStorage.setItem('token', 'true');
      console.log('Successful login')
      this.router.navigate(['/home'])
    }, error => {
      console.error(error);
      this.router.navigate(['/'])
    })
  }

  logout(){
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      console.log('Successful Log out');
      this.router.navigate(['/']);
    }, err => {
      alert(err.message)
      console.error(err);
    })
  }

  signInWithGoogle(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res) => {
      this.router.navigate(['/home']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid))
    }, err => {
      alert(err.message)
      console.error(err)
    })
  }
}
