import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserHomeComponent } from './component/user-home/user-home.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { RegisterFormComponent } from './component/user-login/register-form/register-form.component';
import { LoginFormComponent } from './component/user-login/login-form/login-form.component';
import { AUthGuard, AdminAuthGuard, AdminLoginGuard, LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: '', component: UserLoginComponent, canActivate: [LoginGuard] ,
  children: [
    { path: '' , component: LoginFormComponent, canActivate: [LoginGuard]},
    { path: 'register', component: RegisterFormComponent, canActivate: [LoginGuard]}
  ]
   
},
  {path: 'home', component: UserHomeComponent, canActivate: [AUthGuard]},
  {path: 'admin', component: AdminLoginComponent, canActivate: [AdminLoginGuard]},
  {path: 'admin/home', component: AdminHomeComponent, canActivate: [AdminAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
