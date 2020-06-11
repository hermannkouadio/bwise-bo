import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CustomerService } from '../../services/customer.service';
import { ProductDetailRoutingModule } from './product-detail-routing.module';



@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    ProductDetailRoutingModule
  ],
  providers:[ProductService, CustomerService],
})
export class ProductDetailModule { }
