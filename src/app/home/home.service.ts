import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { PersistenceService } from '@app/core/persistance.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // apiUrl = 'http://188.130.168.104';
  apiUrl = this.persistenceService.apiUrl;

  constructor(private http: HttpClient, private persistenceService: PersistenceService) {}

  acceptTerms(accepted: boolean, email: string) {
    return this.http.post(this.apiUrl, accepted).pipe(
      map((res: any) => res as any),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }
}
