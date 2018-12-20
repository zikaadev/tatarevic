import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { PersistenceService } from '@app/core/persistance.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // apiUrl = 'http://188.130.168.104';
  apiUrl = this.persistenceService.apiUrl;

  constructor(
    private http: HttpClient,
    private persistenceService: PersistenceService,
    private notificationsService: NotificationsService
  ) {}

  acceptTerms(accepted: boolean, email: string) {
    return this.http.post(this.apiUrl, accepted).pipe(
      map((res: any) => {
        return res as any;
        this.notificationsService.success('Ok', 'Okk', {
          timeOut: 2000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 100
        });
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }
}