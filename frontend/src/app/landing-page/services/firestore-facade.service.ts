import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ReferralState } from '../models/referral-state.model';
import {
  createReferralError,
  createReferralIsLoading,
  createReferralResponse,
  getReferralsCount,
  getReferralsError,
  getReferralsIsLoading,
  getReferralsResponse,
  getReferrerAccountError,
  getReferrerAccountResponse,
  getReferrerAcountsIsLoading,
} from '../store/landing.selectors';
import {
  CreateRefferal,
  GetReferrals,
  GetReferrerAcount,
} from '../store/landing.action';

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
  $getReferralCount = this.store.pipe(select(getReferralsCount));

  $getReferrerAcountResponse = this.store.pipe(
    select(getReferrerAccountResponse)
  );
  $getReferrerAcountError = this.store.pipe(select(getReferrerAccountError));
  $getReferrerAcountIsLoading = this.store.pipe(
    select(getReferrerAcountsIsLoading)
  );

  constructor(private store: Store<ReferralState>) {}

  getReferrals(email: string) {
    this.store.dispatch(new GetReferrals(email));
  }

  getReferrerAccount(email: string) {
    this.store.dispatch(new GetReferrerAcount(email));
  }

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
}
