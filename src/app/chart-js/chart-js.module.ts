import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartJsRoutingModule } from './chart-js-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MatButtonModule } from '@angular/material/button';
import { PieChartComponent } from './pie-chart/pie-chart.component';




@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    ChartJsRoutingModule,
    MatButtonModule
  ]
})
export class ChartJsModule { }
