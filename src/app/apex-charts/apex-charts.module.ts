import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApexChartsRoutingModule } from './apex-charts-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { ColumnDataLabelsChartComponent } from './column-data-labels-chart/column-data-labels-chart.component';
import { MultipleYAxisChartComponent } from './multiple-y-axis-chart/multiple-y-axis-chart.component';


@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    ColumnChartComponent,
    ColumnDataLabelsChartComponent,
    MultipleYAxisChartComponent
  ],
  imports: [
    CommonModule,
    ApexChartsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ]
})
export class ApexChartsModule { }
