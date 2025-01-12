import { AuthState } from '../models/auth-state.model';
import { AuthActionTypes, AuthActions } from './auth.action';

const initialAuthState: AuthState = {
  google: {
    response: null,
    error: null,
  },
};

export function actionReducer(
  state: AuthState = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.GoogleLoginPopUp:
      return {
        ...state,
        google: {
          ...state.google,
          response: null,
          error: null,
        },
      };
    case AuthActionTypes.GoogleLoginPopUpSuccess:
      return {
        ...state,
        google: {
          ...state.google,
          response: action.payload,
          error: null,
        },
      };
    case AuthActionTypes.GoogleLoginPopUpFail:
      return {
        ...state,
        google: {
          ...state.google,
          response: null,
          error: action.payload,
        },
      };
  }
}
