import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import { MicrostrategyService } from '../../../services/microstrategy.service';
import { GraphicData } from 'src/app/models/graphic-data';

@Component({
  //selector: 'app-highchart-pie',
  templateUrl: './highchart-pie.component.html',
  styleUrls: ['./highchart-pie.component.scss']
})
export class HighchartPieComponent implements OnInit {

  constructor(private microstrategyService:MicrostrategyService){}

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {  } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngularFlag: boolean = false; // optional boolean, defaults to false
  chartOptions: Highcharts.Options;

  result:Array<GraphicData>;

  displayedColumns: string[] = [ 'title', 'value', 'position' ];

  anyos:string[] = [ '2018', '2019' , '2020', '2021' ];
  selectedAnyos: string[] = ['2020'];
  
  ngOnInit() {
    this.result = this.microstrategyService.getValues();

    let data:Array<Object> = this.dataToHighchart(this.result);

    this.chartOptions = {
      title: {
        text: 'Browser market shares in January, 2018'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      chart: {
        animation : true,
      },
      series: [{
        data: data,
        type: 'pie'
      }],
      accessibility: {
        point: {
            valueSuffix: '%'
        }
      },
      legend: {
        useHTML: true,
        itemStyle: {
          lineHeight: "23px"
        },
        squareSymbol: false,
        symbolHeight: 3,
        symbolWidth: 20
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            },
            showInLegend: true
        }
      },
    };
  }

  loadGraphic(){
    this.result = this.microstrategyService.getValues();
    let data:Array<Object> = this.dataToHighchart(this.result);

    this.chartOptions.series = [{
      data: data,
      type: 'pie'
    }];

    this.updateFlag = true;
  }

  onNgModelChange(event:any){
    //console.log('on ng model change', event);
    this.loadGraphic();
  }

  dataToHighchart(values:Array<GraphicData>):Array<Object>{
    let datos:Array<Object> = new Array<Object>();
    if( values == null || values.length == 0 )
      return datos;

    values.forEach( item => {
      datos.push( {
        name: item.title,
        y: item.value,
      })
    });

    return datos;
  }

}
