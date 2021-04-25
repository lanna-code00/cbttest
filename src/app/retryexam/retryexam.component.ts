import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retryexam',
  templateUrl: './retryexam.component.html',
  styleUrls: ['./retryexam.component.css']
})
export class RetryexamComponent implements OnInit {
 
  public congrats = "CONGRATS! YOU PASSED YOUR EXAMS, AWAIT YOUR RESULT WITHIN A SHORT TIME";
  constructor() { }

  ngOnInit(): void {
  }

}
