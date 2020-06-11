import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CustomerService } from '../../../services/customer.service';
import { SignInService } from '../../../services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;

    username: string;
    uid: number;

    constructor(private translate: TranslateService, private loginService: SignInService, private customService: CustomerService, public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });

        // init username
        this.username = customService.getUserName();
        this.uid = customService.getUID();
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.loginService.logout(this.customService.getUID(), this.customService.getToken())
        .subscribe((resp)=>{
            alert(resp);
            this.router.navigateByUrl('/login');
        });
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
