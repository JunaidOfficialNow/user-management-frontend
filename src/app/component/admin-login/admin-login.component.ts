import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(
    private authSerivce: AuthService,
    private router: Router,
    private cookie: CookieService
  ) {}
  onSubmit(form: NgForm) {
    this.authSerivce.adminLogin({email: form.value.email, password: form.value.password}).subscribe(token=> {
      if (token.access_token) {
        this.cookie.set('token', token.access_token);
        this.router.navigate(['/admin/home']);
      }
    }, error=> {
      if ( Array.isArray(error.error.message)) {
        alert(error.error.message[0]);
      }
      else {
        alert(error.error.message);
      }

    })


  }

}
