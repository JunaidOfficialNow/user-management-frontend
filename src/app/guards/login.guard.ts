import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router
    
    ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      return this.router.navigate(['/home']);
    } else {
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class AdminLoginGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router
    
    ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isAdminLoggedIn()) {
      return this.router.navigate(['/admin/home']);
    } else {
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class AUthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,

  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      return true;
     }
     return this.router.navigate(['']);
}
}

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,

  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isAdminLoggedIn()) {
      return true;
     }
     return this.router.navigate(['/admin']);
}
}