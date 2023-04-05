import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserDto } from './interface/create-user-dto';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient,
    private cookie: CookieService
    
    ) { }

  signUp(createUserDto: CreateUserDto) {
    return this.http.post<{ access_token: string }>(`${this.baseUrl}/api/v1/users`, createUserDto );
  }
  
  isLoggedIn(): boolean {
     return this.cookie.check('token');
  }

  logout(): void {
    this.cookie.delete('token');
  }
 
}
