import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryDetailRoutingModule } from './category-detail-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryDetailComponent } from './category-detail.component';


@NgModule({
  declarations: [CategoryDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoryDetailRoutingModule
  ]
})
export class CategoryDetailModule { }
