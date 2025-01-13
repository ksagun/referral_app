import { Component, OnInit } from '@angular/core';
import { AuthFacadeService } from '../../../core/services/auth.facade-service';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(
    private authFacadeService: AuthFacadeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  public GoogleLogin() {
    this.authService.googleFirebaseLogin();
  }
}
