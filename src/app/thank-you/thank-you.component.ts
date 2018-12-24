import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  version: string = environment.version;
  param = { value: 'world' };

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {}
}
