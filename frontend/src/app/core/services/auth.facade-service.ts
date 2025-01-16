import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../models/auth-state.model';
import { googleLoginCredentials } from '../store/auth.selectors';
import { GoogleLogin } from '../store/auth.action';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  $googleLoginResponse = this.store.pipe(select(googleLoginCredentials));

  constructor(private store: Store<AuthState>) {}

  getGoogleLoginResponse() {
    this.store.dispatch(new GoogleLogin());
  }
}
