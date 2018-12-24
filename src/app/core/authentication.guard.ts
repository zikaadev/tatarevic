// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';

// import { Logger } from './logger.service';
// import { NotificationsService } from 'angular2-notifications';

// const log = new Logger('AuthenticationGuard');

// @Injectable()
// export class AuthenticationGuard implements CanActivate {

//   constructor(private router: Router,
//     private notification: NotificationsService) { }

//   // canActivate(data: string): boolean {
//   //   if (this.authenticationService.isAuthenticated()) {
//   //     return true;
//   //   }
//   //   this.notification.error('Error', 'Unauthorized, please login ... ', {
//   //     timeOut: 3000,
//   //     showProgressBar: true,
//   //     pauseOnHover: false,
//   //     clickToClose: false,
//   //     maxLength: 100
//   //   });
//   //   localStorage.removeItem('credentials');
//   //   localStorage.removeItem('sessionTimes');
//   //   setTimeout(() => {
//   //     this.router.navigate(['/login'], { replaceUrl: true });
//   //   }, 3000);

//     return false;
//   }

// }
