import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderService } from '../../services/order.service';
import { CustomerService } from '../../services/customer.service';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ], 
  providers:[OrderService, CustomerService],
})
export class OrderModule { }
