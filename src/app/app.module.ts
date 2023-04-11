import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

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
import { AdminHeaderComponent } from './component/admin-home/admin-header/admin-header.component';
import { UsersComponent } from './component/admin-home/users/users.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './shared/loading/loading.component';
import { AlertComponent } from './shared/alert/alert.component';
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptor } from './interceptor/token.interceptor';

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
    AdminHomeComponent,
    AdminHeaderComponent,
    UsersComponent,
    LoadingComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
