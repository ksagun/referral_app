import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ReferralEffects } from './store/landing.effect';
import { StoreModule } from '@ngrx/store';
import { referralReducer } from './store/landing.reducer';
import { FirestoreService } from './services/firestore.service';
import { FirestoreFacadeService } from './services/firestore-facade.service';
import { REFERRAL_STATE } from './store/landing.action';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ReferralEffects]),
    StoreModule.forFeature(REFERRAL_STATE, referralReducer),
  ],
  providers: [FirestoreService, FirestoreFacadeService],
})
export class LandingStateModule {
  static forRoot(): ModuleWithProviders<LandingStateModule> {
    return {
      ngModule: LandingStateModule,
      providers: [FirestoreService, FirestoreFacadeService],
    };
  }
}
