import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
   public newChartId;
  public getHistory;
  public no_Of_quest;
  public score;
  newscore;
  public certcount;
  public quest;
  public questcount;
  constructor(public api: ApiService) { }

  ngOnInit(): void {
    let id = JSON.parse(localStorage.admin);
    this.api.post_a_particular_tutor(id).subscribe(data => {
      console.log(data)
    })

    this.api.get_history().subscribe(data => {
      this.newChartId = data;
      this.getHistory = this.newChartId.filter(u => u.admin_id == id.session);
      this.no_Of_quest = this.getHistory.length;
    })

    this.api.getstudentscore().subscribe(data => {
      this.newscore = data
      this.score = this.newscore.filter(u => u.admin_id == id.session);
      this.certcount = this.score.length
    })

    this.api.getquest().subscribe(data => {
      this.quest = data;
      let y = this.quest.filter(u => u.admin_id === id.session)
      this.questcount = y.length;
    })
  }

}
