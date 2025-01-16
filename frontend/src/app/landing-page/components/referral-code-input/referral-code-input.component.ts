import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'referral-code-input',
  templateUrl: './referral-code-input.component.html',
  styleUrl: './referral-code-input.component.scss',
})
export class ReferralCodeInputComponent {
  @Input()
  inviteCode: string | null | undefined;

  @Output()
  copyToClipboard: EventEmitter<string> = new EventEmitter<string>();

  copyInviteLink() {
    this.copyToClipboard.emit(
      `${environment.url}/invite?code=${this.inviteCode}`
    );
  }
}
