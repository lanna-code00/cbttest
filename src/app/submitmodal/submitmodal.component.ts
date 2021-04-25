import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitmodal',
  templateUrl: './submitmodal.component.html',
  styleUrls: ['./submitmodal.component.css']
})
export class SubmitmodalComponent implements OnInit {
  public settime = true;
  public results = false;
  public modals = true;
  constructor() { }

  ngOnInit(): void {
     setTimeout(() => {
       this.settime = false;
       this.results = true;
     }, 3000);
   
  }

}
