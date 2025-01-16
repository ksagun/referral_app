import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../models/auth-state.model';
import { AUTH_STATE } from './auth.action';

export const authState = createFeatureSelector<AuthState>(AUTH_STATE);

export const googleLoginCredentials = createSelector(
  authState,
  (state) => state?.google?.response
);

export const googleLoginCredentialsError = createSelector(
  authState,
  (state) => state?.google?.error
);
