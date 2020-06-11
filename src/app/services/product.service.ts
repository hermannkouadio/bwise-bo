import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericListResponse } from '../models/genericlistresponse';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { identifierModuleUrl } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl = environment.apiBaseUrl + 'products?page=0';
  addUrl = environment.apiBaseUrl + 'category';

  constructor(private http: HttpClient) { }

  getAll(token: string): Observable<GenericListResponse<Product>> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<GenericListResponse<Product>>(this.productsUrl, httpOptions);
  }

  getOne(id: number, token: string): Observable<Product> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<Product>(environment.apiBaseUrl + 'products/' + id, httpOptions);
  }

  save(data: Product, token: string): Observable<Product> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.post<Product>(this.addUrl, data, httpOptions);
  }

  update(id: number, data: Product, token: string): Observable<Product> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.put<Product>(environment.apiBaseUrl + 'products/' + id, data, httpOptions);
  }

  delete(id: number, token: string): Observable<any> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.delete<any>(environment.apiBaseUrl + 'products/' + id, httpOptions);
  }
}