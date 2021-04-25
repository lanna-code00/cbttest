import { SetforstudentsComponent } from './../setforstudents/setforstudents.component';
import { ConfirmdeleteComponent } from './../confirmdelete/confirmdelete.component';
import { MatDialog } from '@angular/material/dialog';
import { Admin } from './../admin';
import { Setquest } from './../setquest';
import { EntercoursesComponent } from './../entercourses/entercourses.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import 'datatables.net';
import * as $ from 'jquery';
import { of, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-setquest',
  templateUrl: './setquest.component.html',
  styleUrls: ['./setquest.component.css'],
  providers: [EntercoursesComponent]
})
export class SetquestComponent implements OnInit {
  sumitted = false;
  disabledbtn = true;
 public myquest;
  paperId;
 public question = '';
 public optionA = '';
 public optionB = '';
 public optionC = '';
 public optionD  = '';
 public correctans = '';
 public marks = '';
 public questArr = [];
 public setquests = [];
 public options = [];
 public user = JSON.parse(localStorage.admin);
 public questId;
 public passmarks;
  public quests;
 public topic = "";
  public fromlocal = true;
  
  public nothinthere = false;
  public push_to_students = false;
  public time = new Date().toString();
  selectedValue: string;
    times = [
    {value: '1800', viewValue: '30 minutes'},
    {value: '5400', viewValue: 'Ihr 30minutes'},
    {value: '7200', viewValue: '2hrs'},
    {value: '9000', viewValue: '2hrs 30minutes'},
    {value: '10800', viewValue: '3hrs'},
    {value: '12600', viewValue: '3hrs 30minutes'},
    {value: '14400', viewValue: '4hrs'},
    {value: '16200', viewValue: '4hrs 30minutes'},
    {value: '18000', viewValue: '5hrs'},
    ];
  
  constructor(public rout: Router, public service: ApiService, public fb: FormBuilder,
    public entercourse: EntercoursesComponent, public dialog: MatDialog) {
    

      if (this.passmarks == "") {
         this.disabledbtn = true
       } else {
         this.disabledbtn = false
      }
    
   }

  displaytiming(val) {
    console.log(val)
  }

  ngOnInit(): void {
    this.loadquestions();
    let l = this.time.split(' ').splice(0, 5).join(' ')
    localStorage.setItem('dates', JSON.stringify(l));
    if (!this.user.anotherItem) {
      this.disabledbtn = true;
      this.fromlocal = true;
    } else {
      this.disabledbtn = false;
      this.fromlocal = false;
    }
    this.myquest = this.fb.group({
      // papertype: '',
      question:  ['', Validators.required],
      optionA:  ['', Validators.required],
      optionB:  ['', Validators.required],
      optionC:  ['', Validators.required],
      optionD:  ['', Validators.required],
      correctans:  ['', Validators.required],
      marks:  ['', Validators.required],
      admin_id: this.user.session,
      questId: this.user.anotherItem.questId,
      passmarks: this.user.anotherItem.passmark,
      course: this.user.course
     });
     this.passmarks = this.user.anotherItem.passmark
     this.topic = this.user.anotherItem.topic
     this.paperId = this.user.anotherItem.questId
  }

  generate_paper_id(newval) {
    let newId = "QST" + Math.floor(Math.random() * 100000)
       if (!newval) {
      this.disabledbtn = true
    } else {
      this.disabledbtn = false
    }
    this.questId = newId;
    this.paperId = newId;
    this.passmarks = newval;
    
    let er = JSON.parse(localStorage.admin);
    let anotherItem = {
      'questId': newId,
      'passmark': newval,
      'timing': this.selectedValue,
      'topic': this.topic
    }
    let y = { ...er, anotherItem}
    console.log(y);
    if (y) {
      this.fromlocal = false;
      localStorage.setItem('admin', JSON.stringify(y))
    }
  }

  editexamdetail() {
    this.fromlocal = true
  }

  loadquestions() {
    ($('#myTable') as any).DataTable();
    this.service.getquest().subscribe((data) =>{
      if (data.length < 1) {
        this.nothinthere = true;
      } else {
        this.nothinthere = false
      }
      let tt = data.filter(u => u.admin_id == this.user.session);
      this.questArr = JSON.parse(JSON.stringify(tt));
      console.log(this.questArr);
    });
    this.service.getcourse().subscribe(list =>{
      let ww = list;
      this.setquests = JSON.parse(JSON.stringify(ww));
      console.log(this.setquests);
    });
  
  }

  editbtn(edit_id){
    this.rout.navigate(['/adminsidebar/setquest/updatequest/' + edit_id]);
    console.log()
    }

  displayquestiontable(){
    setTimeout(() =>{
      this.sumitted = true;
    }, 50);
  }

  deletequestion(val) {
    const dialogRef = this.dialog.open(ConfirmdeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.rout.navigate(['/adminsidebar/setquest/deletequest/' + val])
    localStorage.setItem('del', JSON.stringify(val));
  }

  hidequestiontable(){
    setTimeout(() =>{
      this.sumitted = false;
    }, 50);
  }
  hidequestiontables(){
    setTimeout(() => {
      this.sumitted = false;
    }, 50);
  }
  
  submitquest() {
    let myquestion = this.myquest.value;
    
    if (this.myquest.invalid) {
      return;
  } else {
    ($('#myTable') as any).DataTable();
    console.log(this.myquest.value);
     let newobj = {
       'question': myquestion.question,
      'optionA': myquestion.optionA,
      'optionB': myquestion.optionB,
      'optionC' :  myquestion.optionC,
      'optionD' :  myquestion.optionD,
      'correctans' :  myquestion.correctans,
      'marks' :  myquestion.marks,
      'admin_id': myquestion.admin_id,
      'questId': myquestion.questId,
      'passmark': myquestion.passmarks
    }
      this.service.setquest(newobj).subscribe(data => {
        if (data) {
          this.loadquestions();
          console.log(data);
      }
  });
}
  }



  set_for_students() {
    const dialogRef = this.dialog.open(SetforstudentsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    let myquestion = this.myquest.value;
     this.service.getquest().subscribe((data) =>{
      let tt = data.filter(u => u.admin_id == this.user.session);
      tt.map((element) => {
        this.quests = element.course_id
      })
     });
    let timeObj = {
      'time_date': JSON.parse(localStorage.dates),
       'admin_id': myquestion.admin_id,
       'topic': this.user.anotherItem.topic,
    }
    this.service.question_date(timeObj).subscribe((data: any) => {
      console.log(data);
    })

    let newobj = {
      'admin_id': myquestion.admin_id,
      'questId': myquestion.questId,
      'course': myquestion.course,
      'dates': JSON.parse(localStorage.dates),
      'timing': this.user.anotherItem.timing,
      'topic': this.user.anotherItem.topic
    }
    this.service.student_quest(newobj).subscribe(data => {
      if (data) {
        setTimeout(() => {
          this.dialog.closeAll();
          this.loadquestions()
        }, 4000);
      }
    console.log(data);
  });
  }

}
