import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public historyArr = [];
  public hist_rout = this.actroute.snapshot.params.id;
  constructor(public api: ApiService, public actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadhistory()
  }

  loadhistory() {
    let userId = JSON.parse(localStorage.admin);
    let newarr = [];
    this.api.get_history().subscribe((data: any) => {
      newarr = data.filter(u => u.admin_id == userId.session);
      this.historyArr = newarr.filter(u => u.dates === this.hist_rout);
    })
  }

  restoreData(val) {
    let newVal = {
      'question': val.question,
      'optionA': val.optionA,
      'optionB': val.optionB,
      'optionC': val.optionC,
      'optionD': val.optionD,
      'correctans': val.correctans,
      'questId': val.course_id,
      'admin_id': val.admin_id,
      'marks': val.marks,
      'passmark': val.pass_mark
    }
    this.api.setquest(newVal).subscribe(data => {
      if (data) {
      this.loadhistory()
      }
      console.log(data)
    })
    let delId = {
      'id':val.id
    }
    this.api.deleteHistory(delId).subscribe(data => {
      if (data) {
        this.loadhistory()
      }
      console.log(data)
    })
  }

}
