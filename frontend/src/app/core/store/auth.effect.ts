import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  AuthActionTypes,
  GoogleLogin,
  GoogleLoginFail,
  GoogleLoginSuccess,
} from './auth.action';
import { AuthService } from '../services/auth.service';
import { catchError, EMPTY, exhaustMap, map, mergeMap, of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) {}

  $getGoogleLoginCreds = createEffect(() =>
    this.action$.pipe(
      ofType<any>(AuthActionTypes.GoogleLogin),
      mergeMap(() =>
        this.authService.currentUser().pipe(
          map((response) => new GoogleLoginSuccess(response)),
          catchError((error) => of(new GoogleLoginFail(error)))
        )
      )
    )
  );
}
