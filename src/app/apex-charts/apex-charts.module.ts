import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApexChartsRoutingModule } from './apex-charts-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    ApexChartsRoutingModule
  ]
})
export class ApexChartsModule { }
