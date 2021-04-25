import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readingpage',
  templateUrl: './readingpage.component.html',
  styleUrls: ['./readingpage.component.css']
})
export class ReadingpageComponent implements OnInit {
  public baseurl = 'http://localhost/newcbt/src/assets/newpics/courses/';
  public loadpage;
  public names;
  constructor(public rout: Router, public api: ApiService, public actroute: ActivatedRoute) { }
  
  
  ngOnInit(): void {
    let routs = this.actroute.snapshot.params.book
    if (routs === "basics") {
      this.loadpage = this.baseurl + 'basics_of_finance.php';
      window.location.replace(this.loadpage);
    }
    if (routs === "cash") {
      this.loadpage = this.baseurl + 'cashflow.php';
      window.location.replace(this.loadpage);
    }
    if (routs === "market") {
      this.loadpage = this.baseurl + 'market_benefits.php';
      window.location.replace(this.loadpage);
    }
    if (routs === "profit") {
      this.loadpage = this.baseurl + 'profit_and_loss.php';
      window.location.replace(this.loadpage);
    }
    if (routs === "sales") {
      this.loadpage = this.baseurl + 'sales_forcasting.php';
      window.location.replace(this.loadpage);
     }
     if (routs === "setting") {
      this.loadpage = this.baseurl + 'setting_prices.php';
      window.location.replace(this.loadpage);
     }
     if (routs === "unique") {
      this.loadpage = this.baseurl + 'unique_value_proposition.php';
      window.location.replace(this.loadpage);
     }
     if (routs === "target") {
      this.loadpage = this.baseurl + 'your_target_audience.php';
      window.location.replace(this.loadpage);
    }

  }

}
