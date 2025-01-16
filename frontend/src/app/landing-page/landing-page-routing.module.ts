import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { AuthenticatedGuard, AuthGuard } from '../core/guards/auth.guard';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard],
    canMatch: [AuthGuard],
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthenticatedGuard],
    canMatch: [AuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
