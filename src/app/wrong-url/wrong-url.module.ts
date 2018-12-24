import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { WrongUrlRoutingModule } from './wrong-url-routing.module';
import { WrongUrlComponent } from './wrong-url.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, WrongUrlRoutingModule, SimpleNotificationsModule],
  declarations: [WrongUrlComponent],
  providers: []
})
export class WrongUrlModule {}
