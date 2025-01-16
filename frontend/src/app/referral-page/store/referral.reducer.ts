import { ReferralState } from '../models/referral-state.model';
import { ReferralActions, ReferralActionTypes } from './referral.action';

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
  referral: {
    response: null,
    error: null,
    isLoading: false,
  },
  userReferral: {
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
    case ReferralActionTypes.GetReferralByCode:
      return {
        ...state,
        referral: {
          ...state.referral,
          response: null,
          isLoading: true,
        },
      };
    case ReferralActionTypes.GetReferralByCodeSuccess:
      return {
        ...state,
        referral: {
          ...state.referral,
          response: action.payload,
          error: null,
          isLoading: false,
        },
      };
    case ReferralActionTypes.GetReferralByCodeFail:
      return {
        ...state,
        referral: {
          ...state.referral,
          response: null,
          error: action.payload,
          isLoading: false,
        },
      };
    case ReferralActionTypes.GetLoggedInUserReferralRecord:
      return {
        ...state,
        userReferral: {
          ...state.userReferral,
          response: null,
          isLoading: true,
        },
      };
    case ReferralActionTypes.GetLoggedInUserReferralRecordSuccess:
      return {
        ...state,
        userReferral: {
          ...state.userReferral,
          response: action.payload,
          error: null,
          isLoading: false,
        },
      };
    case ReferralActionTypes.GetLoggedInUserReferralRecordFail:
      return {
        ...state,
        userReferral: {
          ...state.userReferral,
          response: null,
          error: action.payload,
          isLoading: false,
        },
      };
    default:
      return { ...state };
  }
}
