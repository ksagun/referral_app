import { ReferralState } from '../models/referral-state.model';
import { ReferralActions, ReferralActionTypes } from './landing.action';

const initialReferralState: ReferralState = {
  createReferral: {
    response: null,
    error: null,
    isLoading: false,
  },
  referrals: {
    response: null,
    error: null,
    isLoading: false,
  },
  referrerAcount: {
    response: null,
    error: null,
    isLoading: false,
  },
};

export function referralReducer(
  state: ReferralState = initialReferralState,
  action: ReferralActions
): ReferralState {
  switch (action.type) {
    case ReferralActionTypes.CreateRefferal:
      return {
        ...state,
        createReferral: {
          ...state.createReferral,
          response: null,
          isLoading: true,
        },
      };
    case ReferralActionTypes.CreateRefferalSuccess:
      return {
        ...state,
        createReferral: {
          ...state.createReferral,
          response: action.payload,
          error: null,
          isLoading: false,
        },
      };
    case ReferralActionTypes.CreateRefferalFail:
      return {
        ...state,
        createReferral: {
          ...state.createReferral,
          response: null,
          error: action.payload,
          isLoading: false,
        },
      };
    case ReferralActionTypes.GetReferrals:
      return {
        ...state,
        referrals: {
          ...state.referrals,
          response: null,
          isLoading: true,
        },
      };
    case ReferralActionTypes.GetReferralsSuccess:
      return {
        ...state,
        referrals: {
          ...state.referrals,
          response: action.payload,
          error: null,
          isLoading: false,
        },
      };
    case ReferralActionTypes.GetReferralsFail:
      return {
        ...state,
        referrals: {
          ...state.referrals,
          response: null,
          error: action.payload,
          isLoading: false,
        },
      };
    case ReferralActionTypes.GetReferrerAcount:
      return {
        ...state,
        referrerAcount: {
          ...state.referrerAcount,
          response: null,
          isLoading: true,
        },
      };
    case ReferralActionTypes.GetReferrerAcountSuccess:
      return {
        ...state,
        referrerAcount: {
          ...state.referrerAcount,
          response: action.payload,
          isLoading: false,
        },
      };
    case ReferralActionTypes.GetReferrerAcountFail:
      return {
        ...state,
        referrerAcount: {
          ...state.referrerAcount,
          response: action.payload,
          isLoading: false,
        },
      };
    default:
      return { ...state };
  }
}
