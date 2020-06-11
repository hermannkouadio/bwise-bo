import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { GenericListResponse } from '../models/genericlistresponse';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { OrderItem } from '../models/order-item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ordersUrl = environment.apiBaseUrl +'orders?page=0';
  constructor(private http: HttpClient) { }

  getOne(id: number, token: string): Observable<Order> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<Order>(environment.apiBaseUrl + 'orders/' + id, httpOptions);
  }

  getAll(token: string): Observable<GenericListResponse<Order>> {
    // update token
    httpOptions.headers =
  httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<GenericListResponse<Order>>(this.ordersUrl, httpOptions);
  }

  // get all orders registered in this order
  getAllItems(orderId: number, token: string): Observable<OrderItem[]> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Observable
    return this.http.get<OrderItem[]>(environment.apiBaseUrl + 'orders/' + orderId + '/items', httpOptions);
  }

  update(id: number, data: Order, token: string): Observable<Order> {
    // update token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', token);
    // now returns an Order Observable
    return this.http.put<Order>(environment.apiBaseUrl + 'orders/' + id, data, httpOptions);
  }


}
