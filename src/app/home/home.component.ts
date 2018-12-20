import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

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
  userEmail: string;

  constructor(private router: Router, private homeService: HomeService, private activeRoute: ActivatedRoute) {
    const routeParameters = this.activeRoute.params.subscribe((params: any) => {
      this.userEmail = params['email'] ? params['email'] : '';
    });
  }

  ngOnInit() {}

  save() {
    this.homeService.acceptTerms(this.accepted, this.userEmail).subscribe((res: any) => {
      this.router.navigate(['/thank-you']);
    });
  }

  goTo() {
    this.router.navigate(['/thank-you']);
  }
}
