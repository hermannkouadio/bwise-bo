import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoggedUser, JwtRequest } from '../models/loggedUser';
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class SignInService {
  signinUrl = environment.apiBaseUrl + 'signin';
  logoutUrl = environment.apiBaseUrl + 'users/';

  constructor(private http: HttpClient) { }

  signIn(user: JwtRequest): Observable<LoggedUser> {
    // now returns an Observable of Config
    return this.http.post<LoggedUser>(this.signinUrl, user);
  }

  logout(uid: number, token: string): Observable<any> {
    // now returns an Observable of Config
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<any>(this.logoutUrl + '' + uid + '/logout', httpOptions);
  }
} 