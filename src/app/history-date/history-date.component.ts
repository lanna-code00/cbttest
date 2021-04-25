import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-history-date',
  templateUrl: './history-date.component.html',
  styleUrls: ['./history-date.component.css']
})
export class HistoryDateComponent implements OnInit {
  dates = [];
  selectedValue: string;

  constructor(public service: ApiService, public rout: Router, public actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadHistDate()
  }

  loadHistDate() {
    let activeroute = this.actroute.snapshot.params.hist_id;
    this.service.history_date().subscribe((data: any) => {
      this.dates = data.filter(u =>u.admin_id == activeroute);
    })
  }

  checkDate(val) {
    this.rout.navigate(['/adminsidebar/hist_date/' + val])
    console.log(val)
  }

}
