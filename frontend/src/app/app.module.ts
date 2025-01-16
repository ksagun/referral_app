import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderNavComponent } from './core/components/header-nav/header-nav.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from '../environments/environment.development';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { AppStateModule } from './app-state.module';
import { reducers } from './core/store';
import { AuthEffects } from './core/store/auth.effect';
import { AuthService } from './core/services/auth.service';
import { AuthFacadeService } from './core/services/auth.facade-service';
import { AuthGuardModule } from '@angular/fire/auth-guard';
import { AUTH_STATE } from './core/store/auth.action';
import { authReducer } from './core/store/auth.reducer';

@NgModule({
  declarations: [AppComponent, HeaderNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    // AppStateModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE, authReducer),
    AuthGuardModule,
  ],
  providers: [AuthService, AuthFacadeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
