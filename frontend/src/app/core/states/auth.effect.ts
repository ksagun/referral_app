import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  GoogleLoginPopUp,
  GoogleLoginPopUpSuccess,
  GoogleLoginPopUpFail,
  AuthActionTypes,
} from './auth.action';
import { AuthService } from '../services/auth.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class AuthEffects {
  private action$ = inject(Actions);
  private authService = inject(AuthService);

  $googleLoginPopUp = createEffect(() => {
    return this.action$.pipe(
      ofType(AuthActionTypes.GoogleLoginPopUp),
      mergeMap(() =>
        this.authService.loginWithGoogle().pipe(
          map((response) => new GoogleLoginPopUpSuccess(response)),
          catchError((err) => of(new GoogleLoginPopUpFail(err)))
        )
      )
    );
  });
}
