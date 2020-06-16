import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

//import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { GraphicData } from 'src/app/models/graphic-data';
import { MicrostrategyService } from 'src/app/services/microstrategy.service';

@Component({
  //selector: 'app-chartjs-pie',
  templateUrl: './chartjs-pie.component.html',
  styleUrls: ['./chartjs-pie.component.scss']
})
export class ChartJSPieComponent implements OnInit {
  displayedColumns: string[] = [ 'title', 'value', 'position' ];

  anyos:string[] = [ '2018', '2019' , '2020', '2021' ];
  selectedAnyos: string[] = ['2020'];
  
  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //   { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  // ];

  lineChartData:ChartDataSets[];

  // public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255, 0, 0, 0.3)', 
        'rgba(0, 255, 0, 0.3)', 
        'rgba(0, 0, 255, 0.3)',
        'rgba(224, 187, 228, 1)',
        'rgba(149, 125, 173, 1)',
        'rgba(210, 145, 188, 1)',
        'rgba(254, 200, 216, 1)',
        'rgba(255, 223, 211, 1)',
      ],
    },
  ];

  public result:GraphicData[];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private microstrategyService:MicrostrategyService) { }

  ngOnInit() {
    this.result = this.microstrategyService.getValues();
    this.dataToHighchart(this.result);
  }

  loadGraphic(){
    this.result = this.microstrategyService.getValues();
    this.dataToHighchart(this.result);
  }

  onNgModelChange(event:any){
    this.loadGraphic();
  }

  dataToHighchart(values:Array<GraphicData>):void{
    this.pieChartLabels = new Array<Label>();
    this.pieChartData = new Array<number>();
    
    let backgroundColors:Array<string> = new Array<string>();

    // let datos:Array<ChartDataSets> = new Array<ChartDataSets>();
    // if( values == null || values.length == 0 )
    //   return datos;


    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    if( values != null && values.length > 0 )
    {
      values.forEach( item => {
        // datos.push( {
        //   label: item.title,
        //   data: [item.value],
        // })
        this.pieChartLabels.push(item.title);
        this.pieChartData.push(item.value);

        //backgroundColors.push(this.dynamicColor());
      });

      //this.pieChartColors = [{ backgroundColor : backgroundColors }];
    }

    // return datos;
  }

  dynamicColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }
  
}
