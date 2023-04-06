import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  constructor(
    private router: Router,
    private cookie: CookieService
  ) {}

  logout(): void {
    this.cookie.delete('admin_token');
    this.router.navigate(['/'])
  }
}
