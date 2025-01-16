import { NgModule, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './core/store/auth.effect';
import { AuthService } from './core/services/auth.service';
import { AuthFacadeService } from './core/services/auth.facade-service';
import { reducers } from './core/store/index';

@NgModule({
  imports: [EffectsModule.forRoot(AuthEffects), StoreModule.forRoot(reducers)],
  providers: [AuthService, AuthFacadeService],
})
export class AppStateModule {
  static forRoot(): ModuleWithProviders<AppStateModule> {
    return {
      ngModule: AppStateModule,
      providers: [AuthService, AuthFacadeService],
    };
  }
}
