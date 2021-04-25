import { filter } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-studentportal',
  templateUrl: './studentportal.component.html',
  styleUrls: ['./studentportal.component.css']
})
export class StudentportalComponent implements OnInit {
  studentscourse = [];
  public student_id = this.actroute.snapshot.params.id;
  public newscore;
  public newcourse_id;
  public myId;
  constructor(public router: Router, public service: ApiService, public actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadstudentscourse();
  }

  loadstudentscourse() {
    this.service.getstudentscore().subscribe((data)=> {
      this.newscore = data;
      this.newscore.filter(u => {
        if (u.student_id == this.student_id) {
          this.newcourse_id = u.course_id;
         } else {console.log('error in your code')}
      })
    })
     this.service.getcourse().subscribe(data=>{
       this.myId = data;
       let yy = this.myId.filter(t => t.course_id !== this.newcourse_id);
       this.studentscourse = JSON.parse(JSON.stringify(yy));
     })
   }
   
  viewQuestions(id, course_id, courseName, topic) {
    console.log(courseName, topic)
    this.router.navigate(['/stuAnswers/' + id]);
     localStorage.setItem('course_id', JSON.stringify(id))
     localStorage.setItem('topic', JSON.stringify(topic))
    localStorage.setItem('newcourse_id', JSON.stringify(course_id))
    localStorage.setItem('courseName', JSON.stringify(courseName))
  }
}

