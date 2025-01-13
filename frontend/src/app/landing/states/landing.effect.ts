import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  ReferralActionTypes,
  CreateRefferal,
  CreateRefferalSuccess,
  CreateRefferalFail,
  GetReferralsSuccess,
  GetReferralsFail,
} from './landing.action';
import { FirestoreService } from '../services/firestore.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ReferralEffects {
  constructor(private action$: Actions, private firestore: FirestoreService) {}

  $createReferral = createEffect(() =>
    this.action$.pipe(
      ofType<any>(ReferralActionTypes.CreateRefferal),
      mergeMap((params) =>
        this.firestore
          .createReferral(
            params.referrer_email,
            params.referral_email,
            params.invite_code,
            params.invite_date
          )
          .pipe(
            map((response) => new CreateRefferalSuccess(response)),
            catchError((error) => of(new CreateRefferalFail(error)))
          )
      )
    )
  );

  $getReferrals = createEffect(() =>
    this.action$.pipe(
      ofType<any>(ReferralActionTypes.GetReferrals),
      mergeMap((params) =>
        this.firestore.getReferrals(params.referrer_email).pipe(
          map((response) => new GetReferralsSuccess(response)),
          catchError((error) => of(new GetReferralsFail(error)))
        )
      )
    )
  );
}
