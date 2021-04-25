import { Teachers, Students } from './teachers';
import { Setquest } from './setquest';
import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Users} from './users';
import { Admin } from './admin';
import { Courses } from './courses';
import { Observable, pipe, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

myarray: String[] = [];
i: number = 0;
languages = this.getcourse();
 newstr: String

 redirectUrl: string;
  public arr = [];
  baseUrl:string = 'http://localhost/newcbt2';
  // baseUrl:string = 'http://localhost/newcbt/src/assets/newcbt2';
  withCredentials = true;
 @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  public getadminId() {
    return JSON.parse(localStorage.adminId);
  }
 
  selectQuestion(question) {
    this.selectedQuestion.next(question)
  }

  public userlogin(ty) {
    return this.httpClient.post<any>(this.baseUrl + '/loginstudents.php', ty)
    }

  public requests(id) {
    return this.httpClient.post(this.baseUrl + '/test.php', id);
  }

    public mainadminlogin(ty){
      return this.httpClient.post<any>(this.baseUrl + '/mainadminlogin.php', ty);
    }

    public endexam(examdetail){
      return this.httpClient.post<any>(this.baseUrl + '/studentscore.php', examdetail);
    }
    public getmainadmin(){
      return this.httpClient.get<any>(this.baseUrl + '/getmainadmin.php');
    }

    public getallstudents(){
      return this.httpClient.get<any>(this.baseUrl + '/getstudents.php');
    }
    
   public postImage(fd : FormData): Observable<string> {
    return this.httpClient.post<string>(this.baseUrl + '/postImage.php', fd );
   }    

    public correctans(){
      return this.httpClient.get<any>(this.baseUrl + '/correctans.php');
    }

    public getstudentscore(){
      return this.httpClient.get(this.baseUrl + '/getstudentscore.php');
    }

   public getoptions(){
     return this.httpClient.get<any>(this.baseUrl + '/getoptions.php');
   }
  
   public updatecourse(teachers){
     return this.httpClient.put(this.baseUrl + '/updatecourse.php?id=' + teachers.id, teachers);
   }

   public updatequest(update){
    return this.httpClient.put(this.baseUrl + '/updatequest.php', update);
  }

   public getTeachers() {
    return this.httpClient.get<Teachers[]>(this.baseUrl +  '/getcourses.php');
  }

   public delcourse(id){
    return this.httpClient.post(this.baseUrl  + '/deletecourse.php', id);
   }
    
  public delstudent(id) {
    return this.httpClient.post(this.baseUrl + '/deletestudent.php', id)
  }

  public getalltutors() {
    return this.httpClient.get(this.baseUrl + '/gettutors.php')
  }

  public get_a_particular_tutor() {
      return this.httpClient.get(this.baseUrl + '/tutors.php')
  }

  public post_a_particular_tutor(id) {
    return this.httpClient.post(this.baseUrl + '/tutors.php', id)
  }
  
  public getTeachersbyId(id: number){
    return this.httpClient.get<Teachers[]>(this.baseUrl + '/getcoursesbyId.php?id=' + id);
  }

  public getstudentsbyid(id: number){
    return this.httpClient.get<Students[]>(this.baseUrl + '/getstudentbyid.php?id=' + id);
  }

   public getstudentsquest(){
     return this.httpClient.get<any>(this.baseUrl + '/getstudentquest.php');
   }

   public mainadminsignup(tyy) {
    return this.httpClient.post<any>(this.baseUrl + '/mainadminsignup.php',tyy);
  }

   public getstudentsquestbycourseid(){
    // return this.httpClient.get<any>(this.baseUrl + '/getstudentquest.php?id=' + id);
    return this.httpClient.get<any>(this.baseUrl + '/getstudentquestbyid.php');
  }

  public userregistration(obj) {
      return this.httpClient.post(this.baseUrl + '/signupstudents.php', obj)
  }
    
    public setquest(quest){
      return this.httpClient.post(this.baseUrl + '/setquest.php', quest);
    }

    public getquest(){
      return this.httpClient.get<any>(this.baseUrl + '/getquest.php');
    }
     
    public deleteHistory(id) {
      return this.httpClient.post<any>(this.baseUrl + '/deleteHistory.php', id) 
    }
  
    public inputcourses(teachers: Teachers) {
      return this.httpClient.post(this.baseUrl + '/entercourses.php', teachers);
    }

    public getquestionbyid(id: number){
      return this.httpClient.get<Setquest[]>(this.baseUrl + '/getquestionbyid.php?id=' + id);
    }

    public getcourse() {
        return this.httpClient.get<Teachers[]>(this.baseUrl + '/getcourses.php');
      }

    public adminlogin(ty) {
      return this.httpClient.post<any>(this.baseUrl + '/adminlogin.php', ty)
      }

    public adminreg(y){
      return this.httpClient.post<any>(this.baseUrl + '/adminreg.php', y)
    }

    public getcoursebyid(id) {
      return this.httpClient.get<any>(this.baseUrl + '/getcourses.php?id='+ id);
    }
  
    public student_quest(question) {
      return this.httpClient.post<any>(this.baseUrl + '/setstudentquest.php', question)
    }
    
    public get_history() {
      return this.httpClient.get<any>(this.baseUrl + '/history.php')
    }
  
  public question_date(dates) {
    return this.httpClient.post<any>(this.baseUrl + '/quest_date.php', dates);
  }

  public history_date() {
    return this.httpClient.get(this.baseUrl + '/get_quest_date.php')
  }

  public deletequest(del) {
    return this.httpClient.post(this.baseUrl + '/deletequest.php', del)
  }

  setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true;
  }
  return false;
  }
}
