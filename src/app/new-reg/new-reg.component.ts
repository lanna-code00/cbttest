import { ApiService } from './../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Gender {
    value: string;
    viewValue: string;
}
  
@Component({
  selector: 'app-new-reg',
  templateUrl: './new-reg.component.html',
  styleUrls: ['./new-reg.component.css']
})
export class NewRegComponent implements OnInit {
submitted = false;
correct = false;
loading = false;
pictures = ""
url = "";
  gender: Gender[] = [
    {value: 'female', viewValue: 'Female'},
    {value: 'male', viewValue: 'Male'}
  ]
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private dataService: ApiService,
    private router: Router) { }
  
  ngOnInit(): void {
  }

  angForm = this.fb.group({
    matric: '190' + Math.floor(Math.random() * 1000),
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    address: ['', Validators.required],
    parentsname: ['', Validators.required],
    parentsno: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    gender: ['', Validators.required],
  });  

get myfirstname(){ return this.angForm.get('firstname'); }
get mylastname(){ return this.angForm.get('lastname'); }
get mysurname(){ return this.angForm.get('surname'); }
get myemail(){ return this.angForm.get('email'); }
get myusername(){ return this.angForm.get('username'); }
get myaddress(){ return this.angForm.get('address'); }
get parentsname(){ return this.angForm.get('parentsname'); }
get myparentsno(){ return this.angForm.get('parentsno'); }
get myphone(){ return this.angForm.get('phone'); }
get mypassword(){ return this.angForm.get('password'); }
get mygender(){ return this.angForm.get('gender'); }

  postdata() {
    let myform = this.angForm.value;
    if (this.angForm.invalid) {
      console.log('hello')
    }
    else if(this.angForm.valid) {
      this.correct = true;
          setTimeout(() => {
                this.loading = true;
                this.router.navigate(['/login'])
          }, 4000);
       this._snackBar.open(myform.username.toUpperCase(),"Added",{
      duration: 3000,
    });
      this.dataService.userregistration(myform).subscribe(data => {
       
        console.log(data)
      });
      let p = JSON.parse(localStorage.getItem('students')) || [];
      let r = [...p, myform];
      console.log(r);
      localStorage.setItem('students', JSON.stringify(r));
    }
        
}

}
