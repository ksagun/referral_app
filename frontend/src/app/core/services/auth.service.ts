import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly auth: AngularFireAuth) {}

  loginWithGoogle(): Observable<any> {
    this.auth.signInWithPopup(new GoogleAuthProvider());
    return this.auth.authState;
  }

  async getFirebaseGoogleUser(): Promise<any> {
    const angularFireAuth = inject(AngularFireAuth);
    return await angularFireAuth.currentUser;
  }

  getFirebaseGoogleUserCredentials(): Observable<any> {
    const angularFireAuth = inject(AngularFireAuth);
    return angularFireAuth.credential;
  }
}
