import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

import { HighchartLineComponent } from './components/highchart/highchart-line/highchart-line.component';
import { ChartJSLineComponent } from './components/chartjs/chartjs-line/chartjs-line.component';
import { HighchartPieComponent } from './components/highchart/highchart-pie/highchart-pie.component';
import { ChartJSPieComponent } from './components/chartjs/chartjs-pie/chartjs-pie.component';

import { AccesibilityComponent } from './pages/accesibility/accesibility.component';

import { MatTableModule } from '@angular/material/table'
import { MatListModule } from '@angular/material/list';

import { MenuComponent } from './elements/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,

    HighchartLineComponent,
    ChartJSLineComponent,
    HighchartPieComponent,
    ChartJSPieComponent,
    AccesibilityComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    MatTableModule,
    MatListModule,

    ChartsModule, // ChartJS
    HighchartsChartModule, BrowserAnimationsModule, // HighChart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
