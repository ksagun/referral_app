import { Component } from '@angular/core';
import { AuthFacadeService } from '../../core/services/auth.facade-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthFacadeService) {}

  public GoogleLogin() {
    this.authService.triggerGoogleLoginPopup();
  }
}
