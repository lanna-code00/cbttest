import { filter, map } from 'rxjs/operators';
import { ApiService } from './../api.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-adminchart',
  templateUrl: './adminchart.component.html',
  styleUrls: ['./adminchart.component.css']
})
export class AdminchartComponent implements OnInit {
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  barChart: any;
  public user = JSON.parse(localStorage.admin)
  public newChartId;
  public getHistory;
  public dates = [];

  constructor(public service: ApiService) { }

  ngOnInit(): void {
 
  }

  ngAfterViewInit(): void {
    this.barChartMethod()
  }

  barChartMethod() {
    let myadmin = this.user.session;
    this.service.history_date().subscribe((data: any) => {
      this.dates = data.filter(u => u.admin_id == myadmin);
      
    this.service.get_history().subscribe(data => {
      this.newChartId = data;
      this.getHistory = this.newChartId.filter(u => u.admin_id == myadmin);
      
    console.log(this.getHistory.length)
      let myArr = []
      let newHist = []
    this.dates.map(elem => {
      myArr.push(elem.dates)
    })
    let filteredDate;
    this.dates.map(elem => {
      filteredDate = this.getHistory.filter(u => u.dates == elem.dates)
      newHist.push(filteredDate.length)
    })
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: myArr,
        datasets: [{
          label: this.getHistory.length +' Past Questions',
          data: newHist,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    })

    })
      
  }

}
