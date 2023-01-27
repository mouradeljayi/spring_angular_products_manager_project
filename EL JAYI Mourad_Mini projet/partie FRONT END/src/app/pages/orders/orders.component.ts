import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order [] =  [];

  constructor(
    private orderService: OrdersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllOrderes();
    
  }

  getAllOrderes() {
    this.orderService.getAllOrders().subscribe( 
      res => {
        this.orders = res;
      },error => {
        console.log(error);
      }
    )
  }

  editOrder(id?: number) {
    this.router.navigate(["orderArticles", id]);
  }

}
