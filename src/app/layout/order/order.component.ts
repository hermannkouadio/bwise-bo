import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    if(!this.customerService.isLogged){
      return;
    }
    console.log(this.customerService.getToken());
    this.orderService.getAll(this.customerService.getToken())
      .subscribe(
        resp => {
          console.log(resp);
          this.orders = resp.content;
        }
      )
  }

}
