import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { SignInService } from '../../../services/login.service';
import { CustomerService } from '../../../services/customer.service';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
  ],
  providers:[SignInService, CustomerService],
})
export class CategoryModule { }
