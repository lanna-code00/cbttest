import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setforstudents',
  templateUrl: './setforstudents.component.html',
  styleUrls: ['./setforstudents.component.css']
})
export class SetforstudentsComponent implements OnInit {
public clicked = true
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.clicked = false;
    }, 4000);
  }

}
