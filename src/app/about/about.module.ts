import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule, SimpleNotificationsModule],
  declarations: [AboutComponent]
})
export class AboutModule {}
