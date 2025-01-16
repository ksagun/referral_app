import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-page-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { LandingStateModule } from './landing-page-state.module';
import { FirestoreService } from './services/firestore.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment.development';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReferralCodeInputComponent } from './components/referral-code-input/referral-code-input.component';

@NgModule({
  declarations: [LoginComponent, DashboardComponent, ReferralCodeInputComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LandingStateModule,
    ClipboardModule,
  ],
  providers: [
    FirestoreService,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
})
export class LandingModule {}
