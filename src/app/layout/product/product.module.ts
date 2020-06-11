import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductService } from '../../services/product.service';
import { CustomerService } from '../../services/customer.service';
import { CategoryService } from '../../services/category.service';
import { CategoryComponent } from '../category/category.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  providers: [ProductService, CategoryService, CustomerService],
})
export class ProductModule { }
