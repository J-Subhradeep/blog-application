import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router, RouterModule } from '@angular/router';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { routes } from './Auth.routing';



@NgModule({
  declarations: [
    LoginComponentComponent,
    RegistrationComponentComponent,
    AuthMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NzFormModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
  ],

  exports:[
    RouterModule
  ]
})
export class AuthModule { }
