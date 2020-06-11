import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailComponent } from './order-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { CustomerService } from '../../services/customer.service';
import { OrderDetailRoutingModule } from './order-detail-routing.module';



@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    OrderDetailRoutingModule
  ],
  providers:[OrderService, CustomerService],
})
export class OrderDetailModule { }
