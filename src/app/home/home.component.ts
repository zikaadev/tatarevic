import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';

import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  param = { value: 'world' };
  accepted = false;
  hasEmailInRoute: boolean;
  userEmail: string;
  right: boolean;
  @Output() rightUrl = new EventEmitter<boolean>();
  currentUrl: string;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificationsService
  ) {
    this.currentUrl = router.url;
    console.log(this.currentUrl);
    const routeParameters = this.activatedRoute.params.subscribe((params: any) => {
      if (params['email']) {
        // this.right = true;
        this.rightUrl.emit(false);
      } else {
        // this.right = false;
        this.rightUrl.emit(true);
      }
      console.log(this.right);
      this.userEmail = params['email'] ? params['email'] : '';
      if (this.userEmail) {
        console.log('Email:', this.userEmail);
      }
    });
  }

  ngOnInit() {}

  save() {
    this.accepted = true;
    this.homeService.acceptTerms(this.accepted, this.userEmail).subscribe((res: any) => {
      this.router.navigate(['/thank-you']);
    });
  }

  goTo(link: string) {
    this.router.navigate([link]); // '/' +
  }
}
