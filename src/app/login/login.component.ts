import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // angForm = FormGroup;
  submitted = false;

  incorrect = false;

  correct = false;
  loading = false;

  public email;

  public password;


  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) { 
  }
        public angForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
        });

  ngOnInit() {
  }

get myemail(){ return this.angForm.get('email'); }
get mypassword(){ return this.angForm.get('password'); }
// get f() { return this.angForm.controls; }

postdata(){
  let myadminlogin = this.angForm.value;
  if (myadminlogin.invalid) {
    return;
} 
else{

  this.dataService.userlogin(myadminlogin).subscribe((data: any) =>{
  let logs = data;
  console.log(logs.session);
  if(data.session){
  //  let er = { y: data.id}
  this.loading = true;
  localStorage.setItem('id', JSON.stringify((data.session)))
    localStorage.setItem('student_user', JSON.stringify(logs))
  setTimeout(() => {
    this.loading = false;
   this.router.navigate(['/sidebar'])
  }, 3000);
    }
    else{
      console.log('Incorrect');
      this.incorrect = true;
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      this.incorrect = false;

      }, 3000);
    }
   })
}
  // console.log(myadminlogin);

 }

}
