import { Action } from '@ngrx/store';

export const REFERRAL_STATE = 'Document';

export enum ReferralActionTypes {
  CreateRefferal = '[Document] Create Refferal',
  CreateRefferalSuccess = '[Document] Create Refferal Success',
  CreateRefferalFail = '[Document] Create Refferal Fail',
  GetReferrals = '[Document] Get Refferals',
  GetReferralsSuccess = '[Document] Get Refferals Success',
  GetReferralsFail = '[Document] Get Refferals Fail',
  GetReferralByCode = '[Document] Get Refferal By Code',
  GetReferralByCodeSuccess = '[Document] Get Refferal By Code Success',
  GetReferralByCodeFail = '[Document] Get Refferal By Code Fail',
  GetLoggedInUserReferralRecord = '[Document] Get Logged In User Refferal Record',
  GetLoggedInUserReferralRecordSuccess = '[Document] Get Logged In User Refferal Record Success',
  GetLoggedInUserReferralRecordFail = '[Document] Get Logged In User Refferal Record Fail',
}

export class CreateRefferal implements Action {
  readonly type = ReferralActionTypes.CreateRefferal;
  constructor(
    public invite_code: string,
    public name: string,
    public referrer_email: string,
    public referral_email: string,
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

export class GetReferralByCode implements Action {
  readonly type = ReferralActionTypes.GetReferralByCode;
  constructor(public invite_code: string) {}
}

export class GetReferralByCodeSuccess implements Action {
  readonly type = ReferralActionTypes.GetReferralByCodeSuccess;
  constructor(public payload: any) {}
}

export class GetReferralByCodeFail implements Action {
  readonly type = ReferralActionTypes.GetReferralByCodeFail;
  constructor(public payload: any) {}
}

export class GetLoggedInUserReferralRecord implements Action {
  readonly type = ReferralActionTypes.GetLoggedInUserReferralRecord;
  constructor(public email: string, public invite_code: string) {}
}

export class GetLoggedInUserReferralRecordSuccess implements Action {
  readonly type = ReferralActionTypes.GetLoggedInUserReferralRecordSuccess;
  constructor(public payload: any) {}
}

export class GetLoggedInUserReferralRecordFail implements Action {
  readonly type = ReferralActionTypes.GetLoggedInUserReferralRecordFail;
  constructor(public payload: any) {}
}

export type ReferralActions =
  | CreateRefferal
  | CreateRefferalSuccess
  | CreateRefferalFail
  | GetReferrals
  | GetReferralsSuccess
  | GetReferralsFail
  | GetReferralByCode
  | GetReferralByCodeSuccess
  | GetReferralByCodeFail
  | GetLoggedInUserReferralRecord
  | GetLoggedInUserReferralRecordSuccess
  | GetLoggedInUserReferralRecordFail;
