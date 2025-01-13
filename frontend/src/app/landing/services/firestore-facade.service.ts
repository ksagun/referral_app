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
} from '../states/landing.selectors';
import { CreateRefferal, GetReferrals } from '../states/landing.action';

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

  constructor(private store: Store<ReferralState>) {}

  createReferral() {
    this.store.dispatch(
      new CreateRefferal(
        'ksagun117@gmail.com',
        'marie.jmpq@gmail.com',
        '87654321',
        new Date()
      )
    );
  }

  getReferrals(email: string) {
    this.store.dispatch(new GetReferrals(email));
  }
}
