import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponentComponent } from './auth-module/login-component/login-component.component';
import { NavigationsComponent } from './common/common-module/navigations/navigations.component';
import { LoginComponentComponent } from './auth/auth/login-component/login-component.component';
import { NotFoundComponent } from './common/common-module/not-found/not-found.component';

const routes: Routes = [
  
  {
    path: 'auth',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./auth/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'dashboard', component: NavigationsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
