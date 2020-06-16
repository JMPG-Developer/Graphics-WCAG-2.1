import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJSLineComponent } from './components/chartjs/chartjs-line/chartjs-line.component';
import { ChartJSPieComponent } from './components/chartjs/chartjs-pie/chartjs-pie.component';

import { HighchartLineComponent } from './components/highchart/highchart-line/highchart-line.component';
import { HighchartPieComponent } from './components/highchart/highchart-pie/highchart-pie.component';

const routes: Routes = [
  { path: 'highchart/line', component: HighchartLineComponent },
  { path: 'chartjs/line', component: ChartJSLineComponent },
  { path: 'highchart/pie', component: HighchartPieComponent },
  { path: 'chartjs/pie', component: ChartJSPieComponent },
  { path: '',   redirectTo: '/highchart/line', pathMatch: 'full' },
  { path: '**', component: ChartJSLineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot( routes, {useHash : true} ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }