import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {

  constructor(
    private cookie: CookieService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/admin')) {
      const token = this.cookie.get('admin_token');
      if (token) {
        const newRequest = request.clone({
          setHeaders: {
            authorization: `Bearer ${token}`
          } 
        });
        return next.handle(newRequest);
    }
    }
    return next.handle(request);
  }
}

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private cookie: CookieService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.cookie.get('token');
    
    if (token) {
      const newRequest = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        } 
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}


