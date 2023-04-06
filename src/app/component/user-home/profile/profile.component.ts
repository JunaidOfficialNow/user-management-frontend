import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from '../user-home.component';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpService
    ) {}

 
    @Input('user') userProps: User = {} as User;
    src = 'https://th.bing.com/th?id=OIP.zCAXDuwn_eW3SyVWfZueyQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2';
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    setTimeout(()=> {
      if (this.userProps.photoUrl) {
        this.src = `http://localhost:3000/${this.userProps.photoUrl}`
      }
    }, 100)
  
  }

  onFileEnable(input: HTMLInputElement) {
    input.click();
  }


  onFileInput(event: Event) {
    const file: File | null = (event.target as HTMLInputElement)?.files?.[0] ?? null;
    if (file) {
      this.http.addProfile(file).subscribe(
        response => {
         if (response.success) {
          this.src = `http://localhost:3000/${response.success}`
         }
        },
        error => {
          if ( Array.isArray(error.error.message)) {
            alert(error.error.message[0]);
          }
          else {
            alert(error.error.message);
          }
        }
      );
    }
  }

}
