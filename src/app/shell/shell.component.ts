import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  // currentUrl: string;
  // right = false;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private notificationsService: NotificationsService
  ) {
    // this.currentUrl = router.url;
    // if (this.currentUrl) {
    //   this.right = true;
    // }
    // console.log(this.currentUrl);
    // const routeParameters = this.activeRoute.params.subscribe((params: any) => {
    //   this.userEmail = params['email'] ? params['email'] : '';
    //   if (this.userEmail) {
    //     console.log('Email:', this.userEmail);
    //   }
    // });
  }

  ngOnInit() {}
}
