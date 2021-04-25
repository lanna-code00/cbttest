import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ChecksignupGuard implements CanActivate{
  constructor(public auth: ApiService, public rout: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // return true;
    // const userRole = this.auth.getallstudents();
  
    this.auth.adminlogin('user').subscribe(data => {
      if (data.success) {
        return true;
      }
      else{
        this.rout.navigate(['/adminlogin']);
      }
    });
    return;
  }
   
}
