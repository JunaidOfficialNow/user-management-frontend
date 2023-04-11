import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserDto } from './interface/create-user-dto';
import { CookieService } from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';


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

  isAdminLoggedIn(): boolean {
    const token = this.cookie.get('token');
    if (token) {
      const tokenDecoded: any = jwtDecode(token);
      console.log(tokenDecoded)
      if (tokenDecoded.admin) {
           return true;
      }
    }
    return false;
 }

  logout(): void {
    this.cookie.delete('token');
  }

  Login(loginUserDto: CreateUserDto) {
    return this.http.post<{access_token: string}>(`${this.baseUrl}/auth/login`, loginUserDto);
  }

  adminLogin(loginUserDto: CreateUserDto) {
    return this.http.post<{ access_token: string }>(`${this.baseUrl}/auth/admin/login`, loginUserDto);
  }
}