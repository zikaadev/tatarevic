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
  @Output() rightUrl = new EventEmitter<boolean>();

  constructor(private notificationsService: NotificationsService, private router: Router) {
    this.rightUrl.emit(false);
  }

  ngOnInit() {}

  goTo() {
    window.history.back();
  }
}
