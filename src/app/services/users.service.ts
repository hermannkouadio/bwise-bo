import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/user';
import { Observable } from 'rxjs';
import { GenericListResponse } from '../models/genericlistresponse';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UserService {
  usersUrl = environment.apiBaseUrl +'users?page=0';

  constructor(private http: HttpClient) { }

  getAll(token: string): Observable<GenericListResponse<Users>> {
    // update token
    httpOptions.headers =
  httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<GenericListResponse<Users>>(this.usersUrl, httpOptions);
  }
}
