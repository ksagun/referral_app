import { Component, OnInit } from '@angular/core';
import { AuthFacadeService } from '../core/services/auth.facade-service';
import { Observable } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent implements OnInit {
  protected $loggedInUser: Observable<any> | undefined;

  constructor(
    private authFacadeService: AuthFacadeService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authFacadeService.getGoogleLoginResponse();
    this.$loggedInUser = this.authFacadeService.$googleLoginResponse;
  }

  signOut() {
    this.authService.googleFirebaseLogout();
    location.href = '/';
  }
}
