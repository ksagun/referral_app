import { Action } from '@ngrx/store';

export const AUTH_STATE = 'Auth';

export enum AuthActionTypes {
  GoogleLoginPopUp = '[Auth] Google Login',
  GoogleLoginPopUpSuccess = '[Auth] Google Login Success',
  GoogleLoginPopUpFail = '[Auth] Google Login Fail',
}

export class GoogleLoginPopUp implements Action {
  readonly type = AuthActionTypes.GoogleLoginPopUp;
  constructor() {}
}

export class GoogleLoginPopUpSuccess implements Action {
  readonly type = AuthActionTypes.GoogleLoginPopUpSuccess;
  constructor(public payload: any) {}
}

export class GoogleLoginPopUpFail implements Action {
  readonly type = AuthActionTypes.GoogleLoginPopUpFail;
  constructor(public payload: any) {}
}

export type AuthActions =
  | GoogleLoginPopUp
  | GoogleLoginPopUpSuccess
  | GoogleLoginPopUpFail;
