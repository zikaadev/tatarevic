import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { PersistenceService } from '@app/core/persistance.service';
import { NotificationsService } from 'angular2-notifications';
import { Customer } from '@app/core/customer.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = this.persistenceService.apiUrl;
  serviceKey = '/acceptance';

  constructor(
    private http: HttpClient,
    private persistenceService: PersistenceService,
    private notificationsService: NotificationsService
  ) {}

  acceptTerms(customer: Customer) {
    const body = JSON.stringify(customer);
    return this.http.put(this.apiUrl + this.serviceKey, body).pipe(
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
