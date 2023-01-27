import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { environment } from 'src/environments/environment';
import { Article } from 'src/app/model/article';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private localUrl = environment.API_URL;


  constructor(private http:HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.localUrl}/orders`);
  }

  getOrderArticles(orderId: number): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.localUrl}/orders/${orderId}/articles`);
  }


  updateOrder(orderId: number, articletId: number): Observable<Order> {
    return this.http.put<Order>(`${this.localUrl}/orders/${orderId}/articles/${articletId}`,{ });
  }

  
}
