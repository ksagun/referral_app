import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { FirestoreFacadeService } from '../../services/firestore-facade.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { combineLatest, Subject, take, takeLast, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-invite',
  templateUrl: './invite-page.component.html',
  styleUrl: './invite-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvitePageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  protected message: string | null | undefined;
  protected inviteStatus = {
    invited: false,
    message: '',
  };

  constructor(
    private authService: AuthService,
    private firestoreFacadeService: FirestoreFacadeService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.authService
        .currentUser()
        .pipe(takeUntil(this.destroy$))
        .subscribe((user) => {
          if (user) {
            this.firestoreFacadeService.getReferral(params['code']);
            this.firestoreFacadeService.getLoggedInUserReferral(
              user.email,
              params['code']
            );

            combineLatest([
              this.firestoreFacadeService.$getReferralResponse,
              this.firestoreFacadeService.$getLoggedInUserReferralResponse,
            ])
              .pipe(takeUntil(this.destroy$))
              .subscribe(([referrer, referral]) => {
                if (referrer) {
                  console.log('Referral data: ', referral);
                  console.log(user);
                  console.log(referrer);

                  if (referral && Object.keys(referral).length > 0) {
                    if (
                      referral.success !== undefined &&
                      referral.success === false
                    ) {
                      console.log('Creating referral entry');
                      this.firestoreFacadeService.createReferral(
                        params['code'],
                        user.username,
                        referrer.referrer_email,
                        user.email,
                        new Date()
                      );

                      this.firestoreFacadeService.$createReferralResponse
                        .pipe(takeUntil(this.destroy$))
                        .subscribe((response) => {
                          if (response) {
                            this.inviteStatus.invited = false;
                            this.inviteStatus.message =
                              'Congratulations! you earned a point.';
                            this.cdr.markForCheck();
                          }
                        });
                    } else {
                      this.inviteStatus.invited = true;
                      this.inviteStatus.message =
                        'Already accepted the invite.';
                      this.cdr.markForCheck();
                    }
                  }
                }

                this.cdr.detectChanges();
              });
          } else {
            this.authService.googleFirebaseLogin();
          }
        });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }
}
