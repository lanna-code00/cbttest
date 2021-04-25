import { Setquest } from './../setquest';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { EntercoursesComponent } from '../entercourses/entercourses.component';

@Component({
  selector: 'app-updatequest',
  templateUrl: './updatequest.component.html',
  styleUrls: ['./updatequest.component.css']
})
export class UpdatequestComponent implements OnInit {
  // @Input() teacher: Setquest;


 public myquest;
 public newquestArr = [];
 public setquests = [];
 public student_id;
 public currentStudents;
 public submitted = false;

 constructor(public rout: Router, public service: ApiService, public fb: FormBuilder,
             public actroute: ActivatedRoute) {}

  ngOnInit(): void {

    this.updating();
    this.service.getcourse().subscribe(list =>{
      let ww = list;
      this.setquests = JSON.parse(JSON.stringify(ww));
      // console.log(this.setquests);
    });
    this.myquest = this.fb.group({
      quest_id: '',
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctans: '',
      marks: '',
     });
  }

  updating(){
    this.submitted = true;
    
    this.service.getquest().subscribe(data =>{
      this.newquestArr = JSON.parse(JSON.stringify(data));
      this.student_id = this.actroute.snapshot.params.id; 
      let newupdate = this.newquestArr.filter(stu => stu.quest_id == this.student_id);
      console.log(newupdate);
      this.currentStudents = newupdate[0];
      console.log(this.currentStudents);
      this.myquest.patchValue({
        quest_id: this.currentStudents.quest_id,
          question: this.currentStudents.question,
          optionA: this.currentStudents.optionA,
          optionB: this.currentStudents.optionB,
          optionC: this.currentStudents.optionC,
          optionD: this.currentStudents.optionD,
          correctans: this.currentStudents.correctans,
          marks: this.currentStudents.marks
      })
    })
  }

  hidequestiontable(){
    this.submitted = false;
    this.rout.navigate(['/adminsidebar/setquest/'])
  }

  update(){
    this.submitted = false;
    let newform = this.myquest.value;
    this.service.updatequest(newform).subscribe(data => {
      this.service.getquest()
      console.log(data)
      this.rout.navigate(['/adminsidebar/setquest/'])
    })

      this.rout.navigate(['/adminsidebar/setquest/'])

  }

  // hidequestiontable(){
  //   setTimeout(() =>{
  //     this.sumitted = false;
  //   }, 50);
  // }
}


