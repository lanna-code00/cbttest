import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  user = JSON.parse(localStorage.student_user);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public rout: Router) { }
  
  ngOnInit(): void {
    
  }
  
  academics() {
    let student_id = this.user.session;
    this.rout.navigate(['/sidebar/studentportal/' + student_id]);
  }

  showcerts() {
    let student_id = this.user.session;
    this.rout.navigate(['/sidebar/notifystudent/' + student_id]);
  }

}
