import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then((m) => m.LandingModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./referral-page/referral-page.module').then(
        (m) => m.ReferralPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
