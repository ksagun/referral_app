import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { defer, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly auth: AngularFireAuth) {}

  googleFirebaseLogin() {
    // this.auth.signInWithRedirect(new GoogleAuthProvider());
    this.auth.signInWithPopup(new GoogleAuthProvider()).then((response) => {
      location.reload();
    });
  }

  getFirebaseGoogleUser(): Observable<any> {
    return from(this.auth.currentUser);
  }

  async getFirebaseLoginState(callback: any): Promise<any> {
    return this.auth.onAuthStateChanged(callback);
  }

  currentUser(): Observable<any> {
    return new Observable<any>((observer) => {
      this.auth.onAuthStateChanged((user: any) => {
        if (user) {
          console.log(user);
          observer.next({
            username: user._delegate.displayName,
            email: user._delegate.email,
            photo: user._delegate.photoURL,
          });
        } else {
          observer.next(null);
        }
      });
    });
  }

  getFirebaseGoogleUserCredentials(): Observable<any> {
    return this.auth.authState;
  }

  googleFirebaseLogout() {
    this.auth.signOut();
  }
}
