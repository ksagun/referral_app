import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ReferralState } from '../models/referral-state.model';
import {
  createReferralError,
  createReferralIsLoading,
  createReferralResponse,
  getLoggedInUserReferralError,
  getLoggedInUserReferralIsLoading,
  getLoggedInUserReferralResponse,
  getReferralError,
  getReferralIsLoading,
  getReferralResponse,
  getReferralsError,
  getReferralsIsLoading,
  getReferralsResponse,
} from '../store/referral.selectors';
import {
  CreateRefferal,
  GetLoggedInUserReferralRecord,
  GetReferralByCode,
  GetReferrals,
} from '../store/referral.action';

@Injectable({
  providedIn: 'root',
})
export class FirestoreFacadeService {
  $createReferralResponse = this.store.pipe(select(createReferralResponse));
  $createReferralError = this.store.pipe(select(createReferralError));
  $createReferralIsLoading = this.store.pipe(select(createReferralIsLoading));

  $getReferralsResponse = this.store.pipe(select(getReferralsResponse));
  $getReferralsError = this.store.pipe(select(getReferralsError));
  $getReferralsIsLoading = this.store.pipe(select(getReferralsIsLoading));

  $getReferralResponse = this.store.pipe(select(getReferralResponse));
  $getReferralError = this.store.pipe(select(getReferralError));
  $getReferralIsLoading = this.store.pipe(select(getReferralIsLoading));

  $getLoggedInUserReferralResponse = this.store.pipe(
    select(getLoggedInUserReferralResponse)
  );
  $getLoggedInUserReferralError = this.store.pipe(
    select(getLoggedInUserReferralError)
  );
  $getLoggedInUserReferralIsLoading = this.store.pipe(
    select(getLoggedInUserReferralIsLoading)
  );

  constructor(private store: Store<ReferralState>) {}

  createReferral(
    invite_code: string,
    name: string,
    referrer_email: string,
    referral_email: string,
    invite_date: Date
  ) {
    this.store.dispatch(
      new CreateRefferal(
        invite_code,
        name,
        referrer_email,
        referral_email,
        invite_date
      )
    );
  }

  getReferrals() {
    this.store.dispatch(new GetReferrals('ksagun117@gmail.com'));
  }

  getReferral(code: string) {
    this.store.dispatch(new GetReferralByCode(code));
  }

  getLoggedInUserReferral(email: string, code: string) {
    this.store.dispatch(new GetLoggedInUserReferralRecord(email, code));
  }
}
