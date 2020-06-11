import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category, } from '../models/category';
import { Observable } from 'rxjs';
import { GenericListResponse } from '../models/genericlistresponse';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesUrl = environment.apiBaseUrl + 'categories?page=0';
  addUrl = environment.apiBaseUrl + 'category';

  constructor(private http: HttpClient) { }

  getAll(token: string): Observable<GenericListResponse<Category>> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<GenericListResponse<Category>>(this.categoriesUrl, httpOptions);
  }

  getOne(id: number, token: string): Observable<Category> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<Category>(environment.apiBaseUrl + 'categories/' + id, httpOptions);
  }

  save(data: Category, token: string): Observable<Category> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.post<Category>(this.addUrl, data, httpOptions);
  }

  update(id: number, data: Category, token: string): Observable<Category> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.put<Category>(environment.apiBaseUrl + 'categories/' + id, data, httpOptions);
  }

  delete(id: number, token: string): Observable<any> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.delete<any>(environment.apiBaseUrl + 'categories/' + id, httpOptions);
  }

  // get all products registered in this category
  getProducts(categoryId: number, token: string): Observable<GenericListResponse<Product>> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<GenericListResponse<Product>>(environment.apiBaseUrl + 'categories/' + categoryId + '/products', httpOptions);
  }

}
