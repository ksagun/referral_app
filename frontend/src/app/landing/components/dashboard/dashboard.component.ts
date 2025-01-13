import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { AuthFacadeService } from '../../../core/services/auth.facade-service';
import { FirestoreFacadeService } from '../../services/firestore-facade.service';
import { Observable } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  protected referralCount$: Observable<number> | undefined;

  constructor(
    private authService: AuthService,
    private authFacadeSerivce: AuthFacadeService,
    private firestoreFacadeService: FirestoreFacadeService,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.authFacadeSerivce.$googleLoginResponse.subscribe((user) => {
      if (user) {
        console.log(user);
        this.firestoreFacadeService.getReferrals(user.email);
      }
    });

    this.firestoreFacadeService.$getReferralsResponse.subscribe((s) =>
      console.log(s)
    );

    this.referralCount$ = this.firestoreFacadeService.$getReferralCount;
    this.referralCount$.subscribe((c) => console.log(c));
  }

  copyToClipboard(code: string) {
    this.clipboard.copy(`localhost:4200/invite?code=${code}`);
    alert('Invite link copied to clipboard.');
  }

  logout() {
    this.authService.googleFirebaseLogout();
    location.reload();
  }
}
