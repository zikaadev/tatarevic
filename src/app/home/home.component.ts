import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';

import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { Customer } from '@app/core/customer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  param = { value: 'world' };
  userEmail = new Customer();
  currentUrl: string;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificationsService
  ) {
    this.currentUrl = router.url;
    const routeParameters = this.activatedRoute.params.subscribe((params: any) => {
      this.userEmail.email = params['email'] ? params['email'] : '';
    });
  }

  ngOnInit() {}

  save() {
    this.homeService.acceptTerms(this.userEmail).subscribe((res: any) => {
      this.router.navigate(['/thank-you']);
    });
  }

  goTo(link: string) {
    this.router.navigate([link]);
  }
}
