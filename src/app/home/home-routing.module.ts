import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { WrongUrlComponent } from '@app/wrong-url/wrong-url.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', component: WrongUrlComponent, data: { title: extract('Wrong URL') } },
    { path: 'policy-statement/:email', component: HomeComponent, data: { title: extract('Policy Statement') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
