import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { LoginFormComponent } from './component/user-login/login-form/login-form.component';
import { RegisterFormComponent } from './component/user-login/register-form/register-form.component';
import { UserHomeComponent } from './component/user-home/user-home.component';
import { FellowUsersComponent } from './component/user-home/fellow-users/fellow-users.component';
import { ProfileComponent } from './component/user-home/profile/profile.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    UserHomeComponent,
    FellowUsersComponent,
    ProfileComponent,
    AdminLoginComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
