import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { MicrostrategyService } from '../../../services/microstrategy.service';
import { GraphicData } from 'src/app/models/graphic-data';
import { Metrics } from 'src/app/models/microstrategy/metrics';
import { Attribute } from 'src/app/models/microstrategy/attribute';

@Component({
  //selector: 'app-chartjs-line',
  templateUrl: './chartjs-line.component.html',
  styleUrls: ['./chartjs-line.component.scss']
})
export class ChartJSLineComponent implements OnInit {
  public result:GraphicData[];
  displayedColumns: string[] = [ 'title', 'value', 'position' ];

  anyos:string[] = [ '2018', '2019' , '2020', '2021' ];
  selectedAnyos: string[] = ['2020'];

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    //{ data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  //public lineChartOptions: (ChartOptions & { annotation: any });
  public lineChartOptions:ChartOptions;

  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private microstrategyService:MicrostrategyService) { }

  // attributes:Array<Attributes>;
  // metrics:Array<Metrics>;

  ngOnInit() {
    this.lineChartLabels = new Array<Label>();

    this.microstrategyService.instances().then( (res) => {
      let attributes:Array<Attribute> = res["result"]["definition"]["attributes"];
      console.log("attributtes", attributes);
      attributes.forEach( (item, index) => {
        let attribute:Attribute = item;
        this.lineChartLabels.push( attribute.name  );
      });

      let metrics:Array<Metrics> = res["result"]["definition"]["metrics"];
      console.log("metrics", metrics);
      metrics.forEach( (item, index) => {
        let metric:Metrics = item;
        this.lineChartLabels.push( metric.name  );
      });

      let children:any = res["result"]["data"]["root"]["children"];
      console.log("children", children);

    });

    this.lineChartOptions = {
      responsive: true,
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        xAxes: [{}],
        yAxes: [
          {
            id: 'y-axis-0',
            position: 'left',
          },
          {
            id: 'y-axis-1',
            position: 'right',
            gridLines: {
              color: 'rgba(255,0,0,0.3)',
            },
            ticks: {
              fontColor: 'red',
            }
          }
        ]
      },
      // annotation: {
      //   annotations: [
      //     {
      //       type: 'line',
      //       mode: 'vertical',
      //       scaleID: 'x-axis-0',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         enabled: true,
      //         fontColor: 'orange',
      //         content: 'LineAnno'
      //       }
      //     },
      //   ],
      // },
    };
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public onNgModelChange(event:any){
    this.loadGraphic();
  }

  public loadGraphic(){

  }
}
