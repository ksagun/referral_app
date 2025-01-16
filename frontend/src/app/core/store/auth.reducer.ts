import { AuthState } from '../models/auth-state.model';
import { AuthActionTypes, AuthActions } from './auth.action';

const initialAuthState: AuthState = {
  google: {
    response: null,
    error: null,
  },
};

export function authReducer(
  state: AuthState = initialAuthState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.GoogleLogin:
      return {
        ...state,
        google: {
          ...state.google,
          response: null,
        },
      };
    case AuthActionTypes.GoogleLoginSuccess:
      return {
        ...state,
        google: {
          ...state.google,
          response: action.payload,
          error: null,
        },
      };
    case AuthActionTypes.GoogleLoginFail:
      return {
        ...state,
        google: {
          ...state.google,
          response: null,
          error: action.payload,
        },
      };
    default:
      return { ...state };
  }
}
