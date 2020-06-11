import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { SignInService } from '../services/login.service';

@NgModule({
    imports: [CommonModule, FormsModule, TranslateModule, LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [SignInService],
})
export class LoginModule { }
