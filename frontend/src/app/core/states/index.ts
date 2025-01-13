import { authReducer } from './auth.reducer';
import { AuthState } from '../models/auth-state.model';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};

export interface AppState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  auth: authReducer,
};
