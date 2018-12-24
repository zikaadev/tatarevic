import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { ThankYouComponent } from './thank-you.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'thank-you', component: ThankYouComponent, data: { title: extract('Thank you') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ThankYouRoutingModule {}
