import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { WrongUrlComponent } from './wrong-url.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/wrong-url', pathMatch: 'full' },
    { path: 'wrong-url', component: WrongUrlComponent, data: { title: extract('Wrong URL') } }
    // { path: '', redirectTo: '/policy-statement/:email', pathMatch: 'full' },
    // { path: 'policy-statement/:email', component: HomeComponent, data: { title: extract('Policy Statement') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WrongUrlRoutingModule {}
