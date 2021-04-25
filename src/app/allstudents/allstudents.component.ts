import { Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import 'datatables.net';
import * as $ from 'jquery';
import { EditformComponent } from '../editform/editform.component';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {

 students = [];

  constructor(public api: ApiService, public rout: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
      ($('#myTable') as any).DataTable();
      this.loadstudents();
  }

  openDialog(student_id) {
    this.rout.navigate(['/mainadminsidenav/editform/' + student_id])
  }
  // (student_id){
  //   this.rout.navigate(['/mainadminsidenav/allstudents/editform/' + student_id])
  // }

  deletestudent(student_id) {
    this.api.delstudent(student_id).subscribe(data => {
      this.loadstudents();
    })
  }
  
  loadstudents(){
    this.api.getallstudents().subscribe(data =>{
      let yy = data;
      let newdata = yy.filter(value => Object.keys(value).length !== 0)
      this.students = JSON.parse(JSON.stringify(newdata));
      console.log(this.students);
    })
  }

}
