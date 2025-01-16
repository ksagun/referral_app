import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthFacadeService } from '../../../core/services/auth.facade-service';
import { AuthService } from '../../../core/services/auth.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FirestoreFacadeService } from '../../services/firestore-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  protected destroy$ = new Subject();

  constructor(
    private authFacadeService: AuthFacadeService,
    private authService: AuthService,
    private firestoreFacadeService: FirestoreFacadeService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  public GoogleLogin() {
    this.authService
      .googleFirebaseLogin()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log(response);
        if (response.success) {
          this.authFacadeService.$googleLoginResponse
            .pipe(takeUntil(this.destroy$))
            .subscribe((user) => {
              if (user) {
                console.log(user);
                this.firestoreFacadeService.getReferrerAccount(user.email);

                this.firestoreFacadeService.$getReferrerAcountResponse
                  .pipe(takeUntil(this.destroy$))
                  .subscribe((account) => {
                    console.log(account);
                    if (account) {
                      if (
                        account &&
                        account.success !== undefined &&
                        account.success === false
                      ) {
                        console.log('No referral acount, creating...');
                        this.firestoreFacadeService.createReferral(
                          '',
                          user.username,
                          user.email,
                          '',
                          new Date()
                        );

                        this.firestoreFacadeService.$createReferralResponse
                          .pipe(takeUntil(this.destroy$))
                          .subscribe((response) => {
                            console.log(response);

                            if (response && response.success) {
                              location.reload();
                            }
                          });
                      } else {
                        location.reload();
                      }
                    }
                  });
              }
            });
        }
      });
  }
}
