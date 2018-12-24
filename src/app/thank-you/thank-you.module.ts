import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ThankYouRoutingModule } from './thank-you-routing.module';
import { ThankYouComponent } from './thank-you.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [CommonModule, TranslateModule, ThankYouRoutingModule, SimpleNotificationsModule],
  declarations: [ThankYouComponent]
})
export class ThankYouModule {}
