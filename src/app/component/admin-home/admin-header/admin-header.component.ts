import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output('onQuery') queryEmitter: EventEmitter<string> = new EventEmitter();

  logout(): void {
    this.cookie.delete('token');
    this.router.navigate(['/'])
  }

  searchUser(event: Event) {
    this.queryEmitter.emit((event.target as HTMLInputElement).value)
    
  }
}
