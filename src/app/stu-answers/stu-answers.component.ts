import { SubmitmodalComponent } from './../submitmodal/submitmodal.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import * as $ from 'jquery';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-stu-answers',
  templateUrl: './stu-answers.component.html',
  styleUrls: ['./stu-answers.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StuAnswersComponent implements OnInit {
  
  public noquestions = false; public counts; private subscription: Subscription;
  public answers = []; public studentscore = []; public students_id; public currentStudents;
  public correctpot = []; public anything = []; public myquestId; myopt: string; public optional = [];
  public correct: Number; public pass = false; public scores = ''; public course_id = ''; public student_id  = '';
  public checks;  public bindings = 0;  public bindingadd = 0;public newform = []; public selectall;
  public fail = false; public questionsForm: FormGroup; public exam = true; public cert = true;
  public courses = JSON.parse(localStorage.courseName);
  public topic = JSON.parse(localStorage.topic)
  constructor(private http:  HttpClient,public dialog: MatDialog, private fb: FormBuilder, public service: ApiService, public rout: Router, 
    public actroute: ActivatedRoute) {
               if (this.counts === "00:00") {
                 this.submitexam()
               }
      }

  ngOnInit(): void {
    this.questionsForm = this.fb.group({})
    this.loadquests();
    this.gettotalofstudentscore();
    this.subscription = interval(1000).subscribe(x => { this.countdown(); })
    // setTimeout(() => {
    //   this.countdown()
    // }, 1000);
  }

  gettotalofstudentscore(){
    this.service.getstudentscore().subscribe(data => {
      this.studentscore = JSON.parse(JSON.stringify(data));
      console.log(this.studentscore);
    })
  }

  loadquests(){
    this.service.getstudentsquestbycourseid().subscribe(data=>{
    const newdata = data;
      newdata.map(elem => {
         this.counts = elem.countdown
      })
    this.answers = newdata;
    this.students_id = this.actroute.snapshot.params.quest_id; 
      const y = newdata.filter(stu => stu.pass_mark === this.students_id);
      y.map(el => {
        this.selectall = el;
        })
      this.answers = y;
      console.log(this.answers)
    let controlObject = {};

    this.answers.map(question => {
      controlObject[`q${question.id}`] = ['']
    })

    this.questionsForm = this.fb.group(controlObject);
    this.answers.map(question => {
      this.questionsForm.controls[`q${question.id}`].setValue("")
    })
    console.log(this.questionsForm.value,"FORM CONTROL");
    // console.log(controlObject, " QUESTIONS CONTROL");
    if(y.length == 0){
     this.noquestions = true;
   }
    });

  }

  countdown() {
    this.counts = this.counts - 1
  }

  submitexam() {
  const dialogRef = this.dialog.open(SubmitmodalComponent);
    let score = 0;
    let userAns = this.questionsForm.value;
    let question;
    let myx;
    let keys = Object.keys(userAns);
    keys.map(key => {
      let question_id = key.split('q')[1];
      question = this.answers.filter(ans => ans.id == question_id);
      let correctAns = question[0].correctans;
      if(correctAns == userAns[key]){
        score++;
      }else{
        score += 0;
      }
    })
    question.map(element => {myx = element.quest_id});
       let x = score * 30.5;
   let getstudentid = JSON.parse(localStorage.getItem('id'));
   let getcoursetid = JSON.parse(localStorage.getItem('newcourse_id'));
    
    let mydate = new Date();

    let scoreobj = {
       'student_id': getstudentid,
       'course_id': getcoursetid,
       'scores': x,
       'admin_id': this.selectall.admin_id,
       'questId': this.selectall.pass_mark,
       'passmark': this.selectall.quest_id,
       'dates': mydate
    }
    setTimeout(() => {
      this.dialog.closeAll()
      if (myx <= x) {
         let base = 'http://localhost/newcbt2/studentscore.php';
           this.http.post(base, scoreobj).subscribe(data => {
             console.log(data);
            })
        this.exam = false; this.pass = true;
      } else {
        this.fail = true; this.exam = false;
          }
    }, 4000);
    
 
  }


}
