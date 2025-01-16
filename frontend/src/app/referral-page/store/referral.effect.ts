import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  ReferralActionTypes,
  CreateRefferal,
  CreateRefferalSuccess,
  CreateRefferalFail,
  GetReferralsSuccess,
  GetReferralsFail,
  GetReferralByCodeSuccess,
  GetReferralByCodeFail,
  GetLoggedInUserReferralRecordFail,
  GetLoggedInUserReferralRecordSuccess,
} from './referral.action';
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
            params.invite_code,
            params.name,
            params.referrer_email,
            params.referral_email,
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
        this.firestore.getReferralsByEmail(params.referrer_email).pipe(
          map((response) => new GetReferralsSuccess(response)),
          catchError((error) => of(new GetReferralsFail(error)))
        )
      )
    )
  );

  $getReferralByCode = createEffect(() =>
    this.action$.pipe(
      ofType<any>(ReferralActionTypes.GetReferralByCode),
      mergeMap((params) =>
        this.firestore.getReferralsByInviteCode(params.invite_code).pipe(
          map((response) => new GetReferralByCodeSuccess(response)),
          catchError((error) => of(new GetReferralByCodeFail(error)))
        )
      )
    )
  );

  $getLoggedInUserRecord = createEffect(() =>
    this.action$.pipe(
      ofType<any>(ReferralActionTypes.GetLoggedInUserReferralRecord),
      mergeMap((params) =>
        this.firestore
          .getLoggedInUserReferralRecord(params.email, params.invite_code)
          .pipe(
            map(
              (response) => new GetLoggedInUserReferralRecordSuccess(response)
            ),
            catchError((error) =>
              of(new GetLoggedInUserReferralRecordFail(error))
            )
          )
      )
    )
  );
}
