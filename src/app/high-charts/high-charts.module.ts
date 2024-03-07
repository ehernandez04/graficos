import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartsRoutingModule } from './high-charts-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    HighChartsRoutingModule,
    ChartModule,
    HighchartsChartModule
  ]
})
export class HighChartsModule { }
