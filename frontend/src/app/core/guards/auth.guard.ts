import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';
import { map, Observable, tap } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const auth = inject(AuthService);

  // return auth
  //   .getFirebaseGoogleUserCredentials()
  //   .pipe(map((user) => (user ? false : true)));
  return new Observable<boolean>((observer) => {
    auth.getFirebaseLoginState((user: any) => {
      if (user) {
        observer.next(false);
      } else {
        observer.next(true);
      }
    });
  });
};

export const AuthenticatedGuard: CanActivateFn = (
  route,
  state
): Observable<boolean> => {
  const auth = inject(AuthService);

  // return auth
  //   .getFirebaseGoogleUserCredentials()
  //   .pipe(map((user) => (user ? true : false)));

  return new Observable<boolean>((observer) => {
    auth.getFirebaseLoginState((user: any) => {
      if (user) {
        observer.next(true);
      } else {
        observer.next(false);
      }
    });
  });
};
