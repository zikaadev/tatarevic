import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string = environment.version;
  param = { value: 'world' };

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {}
}
