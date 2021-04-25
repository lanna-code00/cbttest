import { ApiService } from './../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public students_result = [];

  constructor(public actroute: ActivatedRoute, public api: ApiService) { }

  ngOnInit(): void {
    let newid = this.actroute.snapshot.params.admin_id;
    this.api.getstudentscore().subscribe((data: any) => {
      this.students_result = data.filter(u => u.admin_id == newid)
    })
  }



}
