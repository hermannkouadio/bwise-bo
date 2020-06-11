import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/user';
import { UserService } from '../../services/users.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Users[];

  constructor(private usersService: UserService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    if(!this.customerService.isLogged){
      return;
    }
    console.log(this.customerService.getToken());
    this.usersService.getAll(this.customerService.getToken())
      .subscribe(
        resp => {
          console.log(resp);
          this.users = resp.content;
        }
      )
  }

  onDelete(data){}
  onUpdate(data){}

}
