import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TranslateModule,
    CoreModule,
    HttpModule,
    SharedModule,
    HomeRoutingModule,
    SimpleNotificationsModule
  ],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule {}
