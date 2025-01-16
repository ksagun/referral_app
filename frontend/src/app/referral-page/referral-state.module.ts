import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ReferralEffects } from './store/referral.effect';
import { StoreModule } from '@ngrx/store';
import { referralReducer } from './store/referral.reducer';
import { FirestoreService } from './services/firestore.service';
import { FirestoreFacadeService } from './services/firestore-facade.service';
import { REFERRAL_STATE } from './store/referral.action';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ReferralEffects]),
    StoreModule.forFeature(REFERRAL_STATE, referralReducer),
  ],
  providers: [FirestoreService, FirestoreFacadeService],
})
export class ReferralStateModule {
  static forRoot(): ModuleWithProviders<ReferralStateModule> {
    return {
      ngModule: ReferralStateModule,
      providers: [FirestoreService, FirestoreFacadeService],
    };
  }
}
