import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  param = { value: 'world' };

  constructor(private router: Router) {}

  ngOnInit() {}

  // save() {
  //     this.homeService.acceptTerms(this.selectedProduct).subscribe((res: any) => {
  //       this.router.navigate(['/about']);
  //     });
  //   }

  goTo() {
    this.router.navigate(['/thank-you']);
  }
}
