import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviteComponent } from './components/invite/invite.component';

const routes: Routes = [
  {
    path: 'invite',
    component: InviteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralPageRoutingModule {}
