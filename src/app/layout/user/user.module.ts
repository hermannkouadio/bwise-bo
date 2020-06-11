import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CustomerService } from '../../services/customer.service';
import { UserService } from '../../services/users.service';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[UserService, CustomerService],
})
export class UserModule { }
