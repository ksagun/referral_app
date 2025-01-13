import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReferralState } from '../models/referral-state.model';
import { REFERRAL_STATE, ReferralActions } from './referral.action';

export const referralState =
  createFeatureSelector<ReferralState>(REFERRAL_STATE);

export const createReferralResponse = createSelector(
  referralState,
  (state) => state?.createReferral?.response
);

export const createReferralError = createSelector(
  referralState,
  (state) => state?.createReferral?.error
);

export const createReferralIsLoading = createSelector(
  referralState,
  (state) => state?.createReferral?.isLoading
);

export const getReferralsResponse = createSelector(
  referralState,
  (state) => state.referrals.response
);

export const getReferralsError = createSelector(
  referralState,
  (state) => state.referrals.error
);

export const getReferralsIsLoading = createSelector(
  referralState,
  (state) => state.referrals.isLoading
);

export const getReferralResponse = createSelector(
  referralState,
  (state) => state.referral.response
);

export const getReferralError = createSelector(
  referralState,
  (state) => state.referral.error
);

export const getReferralIsLoading = createSelector(
  referralState,
  (state) => state.referral.isLoading
);

export const getLoggedInUserReferralResponse = createSelector(
  referralState,
  (state) => state.userReferral.response
);

export const getLoggedInUserReferralError = createSelector(
  referralState,
  (state) => state.userReferral.error
);

export const getLoggedInUserReferralIsLoading = createSelector(
  referralState,
  (state) => state.userReferral.isLoading
);
