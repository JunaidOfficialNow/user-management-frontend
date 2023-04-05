
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  constructor(private authService: AuthService,
    private router: Router
    ) {}

  isLoading = false;
  error: string | null = null;

  onSubmit(form: NgForm) {
    this.isLoading= true;
    this.authService.signUp(form.value).subscribe(token => {
      this.isLoading= false;
      this.router.navigate(['/home']);

      console.log(token)
    }, error => {
      this.isLoading = false;
      this.error = null;
       this.error = error.error.message[0];
    })
    
  }

}
