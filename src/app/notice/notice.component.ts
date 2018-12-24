import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {
  isLoading: boolean;
  param = { value: 'world' };

  constructor(private notificationsService: NotificationsService, private router: Router) {}

  ngOnInit() {}

  goTo() {
    window.history.back();
  }
}
