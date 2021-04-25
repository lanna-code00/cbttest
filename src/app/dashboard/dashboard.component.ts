import { ApiService } from './../api.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) { }
  
  ngOnInit(): void {
  }

  read_basics(val) {
     this.router.navigate(['/sidebar/readbook/' + val])
  }


}
