import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(public api: ApiService, public route: Router) {
    
  }

  canActivate(): boolean {
    if (!this.api.getadminId()) {
      this.route.navigate(['adminlogin'])
      return false;
    } else {
      return true;
    }
  }
  
}
