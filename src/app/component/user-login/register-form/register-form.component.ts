
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  constructor(private authService: AuthService,
    private router: Router,
    private cookie: CookieService
    ) {}

  isLoading = false;
  error: string | null = null;

  onSubmit(form: NgForm) {
    this.isLoading= true;
    this.authService.signUp(form.value).subscribe(token => {
      this.isLoading= false;
      if ( token.access_token) {
        this.cookie.set('token', token.access_token);
        this.router.navigate(['/home']);
      } else {
        this.error = 'An unknown error occurred';
      }
    }, error => {
      this.isLoading = false;
      this.error = null;
      if ( Array.isArray(error.error.message)) {
        this.error = error.error.message[0];
      }
      else {
        this.error = error.error.message;
      }
    })
    
  }

}
