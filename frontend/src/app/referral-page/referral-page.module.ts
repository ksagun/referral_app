import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralPageRoutingModule } from './referral-page-routing.module';
import { InvitePageComponent } from './containers/invite-page/invite-page.component';
import { ReferralStateModule } from './referral-state.module';
import { environment } from '../../environments/environment.development';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirestoreService } from './services/firestore.service';

@NgModule({
  declarations: [InvitePageComponent],
  imports: [CommonModule, ReferralPageRoutingModule, ReferralStateModule],
  providers: [
    FirestoreService,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
})
export class ReferralPageModule {}
