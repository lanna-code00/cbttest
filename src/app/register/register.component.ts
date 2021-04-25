import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import * as $ from 'jquery';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Gender {
    value: string;
    viewValue: string;
  }

@Component({
selector: 'app-register',
templateUrl: './register.component.html',
styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

submitted = false;

correct = false;

pictures = ""

  url = "";
  // fileToUpload: File = [];
  gender: Gender[] = [
  
    {value: 'female', viewValue: 'Female'},
    {value: 'male', viewValue: 'Male'}
    
  ]

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private dataService: ApiService,
  private router: Router) {}

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
    // pictures: ['', Validators.required]
    });

ngOnInit() {
}

// uploadphoto(files: FileList) {
//         this.fileToUpload = files.item[0];
//         if (this.fileToUpload) {
//                 var reader = new FileReader();
//                 reader.onload = (event) => {
//                   this.url = event.target.result as string;
//                 };
//                 console.log(this.fileToUpload)
//                 reader.readAsDataURL(files.item[0]);
//             }
  
  // if (event.target.files && event.target.files[0]) {
  //   // let myfile = event.target.files[0];
  //   this.files = event.target.files[0];
  //   var reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]); 
  //   reader.onload = (event) => { 
  //   this.url = event.target.result as string;
  //   }
  // }
// }


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
      // return;
    }
    else if(this.angForm.valid) {
      this.correct = true;
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