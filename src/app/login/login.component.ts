import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Users } from '../models/user';
import { LoggedUser, JwtRequest } from '../models/loggedUser';
import { SignInService } from '../services/login.service';
import { CustomerService } from '../services/customer.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    // variable
    jwtRequest: JwtRequest;

    constructor(public router: Router, private customer: CustomerService, private loginService: SignInService) {
        this.jwtRequest = new JwtRequest();
    }

    ngOnInit() { }

    onLoggedin() {
        this.loginService.signIn(this.jwtRequest)
            // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
                console.log(resp);
                if (resp.token) {
                    this.customer.setToken(resp.token, resp.user['fullname']);
                    this.customer.setUID('' + resp.user['uId']);
                    this.router.navigateByUrl('/layout');
                }
            });
    };
}
