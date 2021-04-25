import { ApiService } from './../api.service';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentnotification',
  templateUrl: './studentnotification.component.html',
  styleUrls: ['./studentnotification.component.css']
})
export class StudentnotificationComponent implements OnInit {
  public cert = false;
  students_result;
  constructor(public rout: Router, public actroute: ActivatedRoute, public service: ApiService) { }

  ngOnInit(): void {
    let newid = this.actroute.snapshot.params.student_id;
     this.service.getstudentscore().subscribe((data: any) => {
       this.students_result = data.filter(u => u.student_id == newid)
       if (this.students_result.length < 1) {
         this.cert = false;
       } else {this.cert = true}
    })
  }


}
