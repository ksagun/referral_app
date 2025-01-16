import { Action } from '@ngrx/store';

export const AUTH_STATE = 'Auth';

export enum AuthActionTypes {
  GoogleLogin = '[Auth] Google Login',
  GoogleLoginSuccess = '[Auth] Google Login Success',
  GoogleLoginFail = '[Auth] Google Login Fail',
}

export class GoogleLogin implements Action {
  readonly type = AuthActionTypes.GoogleLogin;
  constructor() {}
}

export class GoogleLoginSuccess implements Action {
  readonly type = AuthActionTypes.GoogleLoginSuccess;
  constructor(public payload: any) {}
}

export class GoogleLoginFail implements Action {
  readonly type = AuthActionTypes.GoogleLoginFail;
  constructor(public payload: any) {}
}

export type AuthActions = GoogleLogin | GoogleLoginSuccess | GoogleLoginFail;
