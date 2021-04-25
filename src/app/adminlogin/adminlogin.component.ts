import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  submitted = false;
  incorrect = false;

  constructor(public router: Router, public fb: FormBuilder, public dataService: ApiService) {
  }
      angForm = this.fb.group({
        identification: ['', [Validators.required, Validators.minLength(1), Validators.email]],
        email: ['', [Validators.required, Validators.email]]
      });

  ngOnInit(): void {
    
  }

  postdata() {
    let myadminlogin = this.angForm.value;
    localStorage.removeItem('admin');
      this.dataService.adminlogin(myadminlogin).pipe(first()).subscribe(data =>{
        let logs = data;
        console.log(logs);
        if (logs.success) {
              localStorage.setItem('admin', JSON.stringify(logs));
              localStorage.setItem('adminId', JSON.stringify(logs.session));
          this.router.navigate(['/adminsidebar']);
        } else {
           this.incorrect = true;
        }
      })
  }
    get identification() { return this.angForm.get('identification'); }
    get email() { return this.angForm.get('email'); }
}
