import { Courses } from './../courses';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Teachers } from '../teachers';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {


  // coursess: Teachers[];
  coursess: Courses[];

  randomId = "";
  schoolId = "";

  constructor(public router: Router, public fb: FormBuilder, public dataService: ApiService) { }

  // angForm = this.fb.group({
  //     name : ['', Validators.required],
  //     course : ['', Validators.required],
  //     questNo : ['', Validators.required],
  //     date: ['', Validators.required],
  //     time: ['', Validators.required]
  // });
  
   angForm = this.fb.group({
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      surname : ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      course: ['', Validators.required],
      identification: ['', Validators.required],
      tutorid: ['', Validators.required]
      });

  ngOnInit(): void {
    this.loadcourses();
  }
  
   loadcourses(){
      this.dataService.getalltutors().subscribe((data: Courses[]) => {
      this.coursess = data;
      console.log(this.coursess);
      this.coursess = JSON.parse(JSON.stringify(this.coursess ));
      console.log(this.coursess);
    });
   }
  
  // loadcourses(){
  //     this.dataService.getcourse().subscribe((data: Teachers[]) =>{
  //     this.coursess = data;
  //     console.log(this.coursess);
  //     this.coursess = JSON.parse(JSON.stringify(this.coursess));
  //     console.log(this.coursess);
  //   });
  // }

  generateid() {
    let e = 'TUT';
    let y = Math.floor(Math.random() * 100000);
    let z = JSON.stringify(y);
    if (z.length < 5) {
      this.randomId = e + z + '2'
    } else {
        this.randomId = e + z;
      }
    
    let ee = 'SCICT '
    let yy = Math.floor(Math.random() * 1000);
    let zz = JSON.stringify(yy);

    if (zz.length < 3) {
      this.schoolId = ee + zz + '2'
    } else {
        this.schoolId = ee + zz;
      }
  }

//   postdata(){
//     let formValue = this.angForm.value;
//     console.log(formValue);
//     this.dataService.getcourse();
//     this.dataService.inputcourses(formValue).subscribe(data => {
//     this.router.navigate(['/adminsidebar/entercourses']);
//     this.loadcourses();
//   });
// }
  
    postdata(){
      let formValue = this.angForm.value;
      if (this.angForm.invalid) {
        return;
      } else {
         this.dataService.adminreg(formValue).subscribe(data => {
            console.log(data)
        });
      }
    this.loadcourses();
}
}
