import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../models/auth-state.model';
import {
  GoogleLoginPopUp,
  GoogleLoginPopUpSuccess,
  GoogleLoginPopUpFail,
} from '../states/auth.action';
import {
  googleLoginPopUpError,
  googleLoginPopUpResponse,
} from '../states/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  $googleLoginPopUpResponse = this.store.pipe(googleLoginPopUpResponse);
  $googleLoginPopUpError = this.store.pipe(googleLoginPopUpError);

  constructor(private store: Store<AuthState>) {}

  triggerGoogleLoginPopup() {
    this.store.dispatch(new GoogleLoginPopUp());
  }
}
