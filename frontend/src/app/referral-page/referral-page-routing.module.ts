import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitePageComponent } from './containers/invite-page/invite-page.component';

const routes: Routes = [
  {
    path: 'invite',
    component: InvitePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralPageRoutingModule {}
