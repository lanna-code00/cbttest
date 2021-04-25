import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmdelete',
  templateUrl: './confirmdelete.component.html',
  styleUrls: ['./confirmdelete.component.css']
})
export class ConfirmdeleteComponent implements OnInit {
 public id;
  constructor(public service: ApiService, public actroute: ActivatedRoute, public rout: Router) { }

  ngOnInit(): void {
    this.id  = this.actroute.snapshot.params.id
  }

  confirmdel() {
    let delId = { 'id': JSON.parse(localStorage.del) };
    this.service.deletequest(delId).subscribe((data: any) => {
      if (data) {
        this.rout.navigate(['/adminsidebar/setquest'])
        this.service.getquest();
      }
      console.log(data)
    })
  }

}
