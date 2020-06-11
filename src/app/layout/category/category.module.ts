import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryService } from '../../services/category.service';
import { CustomerService } from '../../services/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoryRoutingModule
  ],
  providers:[CategoryService, CustomerService],
})
export class CategoryModule { }
