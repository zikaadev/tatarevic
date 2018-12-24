import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { NoticeRoutingModule } from './notice-routing.module';
import { NoticeComponent } from './notice.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, NoticeRoutingModule, SimpleNotificationsModule],
  declarations: [NoticeComponent],
  providers: []
})
export class NoticeModule {}
