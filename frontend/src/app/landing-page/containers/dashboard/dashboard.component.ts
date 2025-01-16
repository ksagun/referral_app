import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { AuthFacadeService } from '../../../core/services/auth.facade-service';
import { FirestoreFacadeService } from '../../services/firestore-facade.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  protected referralCount$: Observable<number> | undefined;
  protected code: string | null | undefined;

  protected destroy$ = new Subject();

  constructor(
    private authService: AuthService,
    private authFacadeSerivce: AuthFacadeService,
    private firestoreFacadeService: FirestoreFacadeService,
    private clipboard: Clipboard,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authFacadeSerivce.$googleLoginResponse
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        if (user) {
          this.firestoreFacadeService.getReferrals(user.email);
          this.firestoreFacadeService.getReferrerAccount(user.email);
        }
      });

    this.firestoreFacadeService.$getReferralsResponse
      .pipe(takeUntil(this.destroy$))
      .subscribe((s) => console.log(s));

    this.referralCount$ = this.firestoreFacadeService.$getReferralCount;
    this.referralCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((c) => console.log(c));

    this.firestoreFacadeService.$getReferrerAcountResponse
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log(response);
        if (response) {
          console.log(response);
          this.code = response?.invite_code;
          this.cdr.detectChanges();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  copyToClipboard(url: string) {
    this.clipboard.copy(url);
    alert('Invite link copied to clipboard.');
  }

  logout() {
    this.authService.googleFirebaseLogout();
    location.reload();
  }
}
