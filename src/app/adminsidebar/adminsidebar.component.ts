import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public api: ApiService, public router: Router) {
    // setInterval(() => {
    //   localStorage.removeItem('adminId')
    // }, 86400);
  }

  user = JSON.parse(localStorage.admin);
  
  ngOnInit(): void {
 
  }

  notified() {
     this.router.navigate(['/adminsidebar/notified/' + this.user.session]);
  }

  hist_dates() {
     this.router.navigate(['/adminsidebar/history/' + this.user.session]);
  }

  logout() {
    localStorage.removeItem('adminId')
     this.router.navigate(['/adminlogin']);
  }

}
