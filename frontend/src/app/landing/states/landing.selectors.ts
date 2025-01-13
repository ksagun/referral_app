import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReferralState } from '../models/referral-state.model';
import { REFERRAL_STATE, ReferralActions } from './landing.action';

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

export const getReferralsCount = createSelector(
  referralState,
  (state) => state.referrals.response?.length
);

export const getReferrerAccountResponse = createSelector(
  referralState,
  (state) => state.referrerAcount.response
);

export const getReferrerAccountError = createSelector(
  referralState,
  (state) => state.referrerAcount.error
);

export const getReferrerAcountsIsLoading = createSelector(
  referralState,
  (state) => state.referrerAcount.isLoading
);
