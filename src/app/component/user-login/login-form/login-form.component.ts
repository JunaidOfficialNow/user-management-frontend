import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private cookie: CookieService,
  ) {}

  error: string | null = null;
  isLoading: boolean = false;

  Login(form: NgForm ) {
    this.isLoading = true;
    this.authService.Login(form.value).subscribe(token=> {
      this.isLoading = false;
      if ( token.access_token) {
        this.cookie.set('token', token.access_token);
        this.router.navigate(['/home']);
      } else {
        this.error = 'An unknown error has occurred'
      }
   
    },error => {
      this.isLoading = false;
      if ( Array.isArray(error.error.message)) {
        this.error = error.error.message[0];
      }
      else {
        this.error = error.error.message;
      }
     
    })

  }

}
