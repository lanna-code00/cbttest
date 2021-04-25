import { Courses } from './../courses';
import { Teachers } from './../teachers';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../api.service';
import 'datatables.net';
import * as $ from 'jquery';
import { first } from 'rxjs/operators';
import { OptionsComponent } from '../options/options.component';


@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {

  // coursess: Teachers[];
  coursess = [];
  
  constructor(public fb: FormBuilder, public dataService: ApiService,public dialog: MatDialog, 
              public router: Router) {}
  
    openDialog() {
      const dialogRef = this.dialog.open(OptionsComponent, {
        width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
         console.log(result);
      });
    }

    editbtn(edit_id){
      this.router.navigate(['/adminsidebar/entercourses/editcourse/' + edit_id]);
     }


  ngOnInit(): void {
    $('#myTable').DataTable();
    this.loadcourses();
  }
  
  // loadcourses(){
  //     this.dataService.getcourse().subscribe((data: Teachers[]) => {
  //     this.coursess = data;
  //     console.log(this.coursess);
  //     this.coursess = JSON.parse(JSON.stringify(this.coursess ));
  //     console.log(this.coursess);
  //   });
  // }

   loadcourses(){
      this.dataService.getalltutors().subscribe((data: any[]) => {
      this.coursess = data;
      console.log(this.coursess);
      this.coursess = JSON.parse(JSON.stringify(this.coursess ));
      console.log(this.coursess);
    });
  }


   delCourse(value){
    this.dataService.delcourse(value).subscribe(data => {
    this.loadcourses();
  });
   }

}
