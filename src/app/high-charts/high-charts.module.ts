import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartsRoutingModule } from './high-charts-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { ColumnDrilldownChartComponent } from './column-drilldown-chart/column-drilldown-chart.component';


@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
    ColumnChartComponent,
    ColumnDrilldownChartComponent
  ],
  imports: [
    CommonModule,
    HighChartsRoutingModule,
    ChartModule,
    HighchartsChartModule
  ]
})
export class HighChartsModule { }
