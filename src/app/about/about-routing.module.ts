import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'thank-you', component: AboutComponent, data: { title: extract('Thank you') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule {}
