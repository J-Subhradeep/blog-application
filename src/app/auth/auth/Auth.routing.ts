import { Routes, RouterModule } from '@angular/router';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthMainComponent,
    children: [
      { path: 'login', component: LoginComponentComponent },
      { path: 'register', component: RegistrationComponentComponent },
      // { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

// export const AuthRoutes = RouterModule.forChild(routes);
