import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { AuthFacadeService } from '../../../core/services/auth.facade-service';
import { FirestoreFacadeService } from '../../services/firestore-facade.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  protected referralCount$: Observable<number> | undefined;

  protected destroy$ = new Subject();

  constructor(
    private authService: AuthService,
    private authFacadeSerivce: AuthFacadeService,
    private firestoreFacadeService: FirestoreFacadeService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.authFacadeSerivce.$googleLoginResponse
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        if (user) {
          console.log(user);
          this.firestoreFacadeService.getReferrals(user.email);
        }
      });

    this.firestoreFacadeService.$getReferralsResponse
      .pipe(takeUntil(this.destroy$))
      .subscribe((s) => console.log(s));

    this.referralCount$ = this.firestoreFacadeService.$getReferralCount;
    this.referralCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((c) => console.log(c));
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  copyToClipboard(code: string) {
    this.clipboard.copy(`${environment.url}/invite?code=${code}`);
    alert('Invite link copied to clipboard.');
  }

  logout() {
    this.authService.googleFirebaseLogout();
    location.reload();
  }
}
