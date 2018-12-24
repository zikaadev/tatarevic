import { Component, OnInit, Input } from '@angular/core';

import { I18nService } from '@app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-header',
  templateUrl: '<app-header (valueChange)="checkRightUrl($event)"></app-header>', // './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  currentUrl: string;
  @Input() rightUrl: boolean;

  constructor(
    private i18nService: I18nService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit() {}

  checkRightUrl(event: boolean): boolean {
    this.rightUrl = event;
    console.log('right url emit: ' + this.rightUrl);
    return;
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
