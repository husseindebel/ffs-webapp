import {Component, Input, OnInit} from '@angular/core';
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
    moduleId: module.id,
    selector: 'sectorstats',
    templateUrl: 'sectorstats.component.html',
    // styleUrls: ['sectorstats.component.css']
    providers: [NewsStatsService]
})
export class SectorStatsComponent  implements OnInit{
    area = 'MerchandiseExports';  // change here
    categoryList: string = 'MineralFuelLubricantAndRelatedMaterial';  // category here
    stateList: string = 'Total,NSW,NT,VIC,QLD,SA,WA'; // state here
    startDate: string = '2015-01-01';  // Date here
    endDate: string = '2015-12-12';
    data: any[] = [];
    view: any[] = [1100, 500];  // chart size
    result: any[] = [];
    temp: any[] = [];
    hilight: any [] = [];
    tempRIC: string;
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend: boolean;
    showXAxisLabel = true;
    xAxisLabel = 'Date';
    showYAxisLabel = true;
    yAxisLabel = 'Return';
    colorScheme = {
      domain: this.getRandomColor()
    };

    ngOnInit(){
        this.showLegend = this.fixLegend();
      Promise.all([ // 0 means ABP.AX, 1 means BHP.AX, as following.
        this.DataS.getCommodities(this.area,this.categoryList,this.stateList,this.startDate,this.endDate)
        .then(val => {   // first index is categoryList, second index is stateList.
          for (let i in this.stateList.split(',')){
            this.data = val['MonthlyCommodityExportData'][0]['regional_data'][i]['data'];
            this.modify(this.modify2(val['MonthlyCommodityExportData'][0]['regional_data'][i]['data'],i), this.stateList.split(',')[i]);

          }
        this.draw(this.result);
      })
    ]);

    }

    constructor(private DataS: NewsStatsService) {

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
            'name': this.data[i]['date'],
            'value': this.data[i]['value']
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
     if(this.stateList.split(',').length > 1){
       returnMe = true;
     }else{
       returnMe = false;
     }
     return returnMe;
   }

}
