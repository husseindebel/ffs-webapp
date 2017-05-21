import {Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NewsStatsService} from '../../services/newsstats.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export var multi = [
  {
    "name": 'noData',
    "series": ''
  }

];

@Component({
  selector: 'newsstats',
  template: `
  <h3>Result of {{RICList}}</h3>
  <ngx-charts-line-chart
    [view]="view"
    [scheme]="colorScheme"
    [results]="checkDraw(drawMe)"
    [gradient]="gradient"
    [xAxis]="showXAxis"
    [yAxis]="showYAxis"
    [legend]="showLegend"
    [showXAxisLabel]="showXAxisLabel"
    [showYAxisLabel]="showYAxisLabel"
    [xAxisLabel]="xAxisLabel"
    [yAxisLabel]="yAxisLabel"
    [autoScale]="autoScale"
    [timeline] = "true"
    (select)="onSelect($event)">
  </ngx-charts-line-chart>
`,
  providers: [NewsStatsService]
})
export class NewsStatsComponent {
  data: any[] = [];
  view: any[] = [1000, 500];  // chart size
  result: any[] = [];
  temp: any[] = [];
  hilight: any [] = [];
  RICList: string = 'ABP.AX,BHP.AX,CBA.AX';  // RIC here
  Date: string = '2012-12-12';  // Date here
  tempRIC: string;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = this.fixLegend();
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Return';
  colorScheme = {
    domain: this.getRandomColor()
  };

  constructor(private DataS: NewsStatsService) {
    Promise.all([ // 0 means ABP.AX, 1 means BHP.AX, as following.
      this.DataS.getData(this.RICList, this.Date)
      .then(val => {
        for (let i in this.RICList.split(',')){
          this.data = val['CompanyReturns'][i]['Data'];
          this.modify(this.modify2(val['CompanyReturns'][i]['Data'],i), this.RICList.split(',')[i]);
        }
      console.log(this.result);
      this.draw(this.result);
    })
  ]);
  }

  onSelect(event) {
    console.log(event);
    console.log(this.data);
  }

  modify(data: Object, RIC: string) {
    this.result.push({
      'name': RIC,
      'series': data
    })
    return this.result;
  }

  modify2(data: Object, RICNumber: string) {
    if(RICNumber === '0'){
      for (let i in data) {
        this.temp.push({
          'name': this.data[i]['Date'],
          'value': this.data[i]['Return']
        });
      }
    }else{  // recursive call it self until done.
      this.temp = [];
      RICNumber = '0';
      this.modify2(data,RICNumber);
    }
    return this.temp;
  }

 draw (drawMe: any[]) {
   if (drawMe !== []) {
     Object.assign(this, { drawMe });
   }
 }

 checkDraw(drawMe: any[]) {
   if ( drawMe === undefined) {
     drawMe = multi;
   }
   return drawMe;
 }

 getRandomColor(){
   let returnMe = [];
   for (var i =0;i<10;i++){
     returnMe.push("#"+((1<<24)*Math.random()|0).toString(16));
   }
   return returnMe;
 }

 fixLegend(){
   var returnMe;
   if(this.RICList.split(',').length > 1){
     returnMe = true;
   }else{
     returnMe = false;
   }
   return returnMe;
 }
}
