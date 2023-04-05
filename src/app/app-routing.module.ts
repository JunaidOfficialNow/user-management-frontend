import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserHomeComponent } from './component/user-home/user-home.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { RegisterFormComponent } from './component/user-login/register-form/register-form.component';
import { LoginFormComponent } from './component/user-login/login-form/login-form.component';

const routes: Routes = [
  {path: '', component: UserLoginComponent,
  children: [
    { path: '' , component: LoginFormComponent},
    { path: 'register', component: RegisterFormComponent}
  ]
   
},
  {path: 'home', component: UserHomeComponent},
  {path: 'admin', component: AdminLoginComponent},
  {path: 'admin/home', component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
