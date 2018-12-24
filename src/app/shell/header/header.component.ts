import { Component, OnInit, Input } from '@angular/core';

import { I18nService } from '@app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  currentUrl: string;
  @Input() rightUrl: boolean;
  right: boolean;

  constructor(
    private i18nService: I18nService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificationsService
  ) {
    if (this.rightUrl) {
      this.checkRightUrl(this.rightUrl);
    }
  }
  ngOnInit() {}

  checkRightUrl(event: boolean): boolean {
    this.right = event;
    console.log('right url emit: ' + this.right);
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
