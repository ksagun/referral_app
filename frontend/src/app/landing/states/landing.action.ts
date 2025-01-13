import { Action } from '@ngrx/store';

export const REFERRAL_STATE = 'Document';

export enum ReferralActionTypes {
  CreateRefferal = '[Document] Create Refferal',
  CreateRefferalSuccess = '[Document] Create Refferal Success',
  CreateRefferalFail = '[Document] Create Refferal Fail',
  GetReferrals = '[Document] Get Refferals',
  GetReferralsSuccess = '[Document] Get Refferals Success',
  GetReferralsFail = '[Document] Get Refferals Fail',
}

export class CreateRefferal implements Action {
  readonly type = ReferralActionTypes.CreateRefferal;
  constructor(
    public referrer_email: string,
    public referral_email: string,
    public invite_code: string,
    public invite_date: Date
  ) {}
}

export class CreateRefferalSuccess implements Action {
  readonly type = ReferralActionTypes.CreateRefferalSuccess;
  constructor(public payload: any) {}
}

export class CreateRefferalFail implements Action {
  readonly type = ReferralActionTypes.CreateRefferalFail;
  constructor(public payload: any) {}
}

export class GetReferrals implements Action {
  readonly type = ReferralActionTypes.GetReferrals;
  constructor(public referrer_email: string) {}
}

export class GetReferralsSuccess implements Action {
  readonly type = ReferralActionTypes.GetReferralsSuccess;
  constructor(public payload: any) {}
}

export class GetReferralsFail implements Action {
  readonly type = ReferralActionTypes.GetReferralsFail;
  constructor(public payload: any) {}
}

export type ReferralActions =
  | CreateRefferal
  | CreateRefferalSuccess
  | CreateRefferalFail
  | GetReferrals
  | GetReferralsSuccess
  | GetReferralsFail;
