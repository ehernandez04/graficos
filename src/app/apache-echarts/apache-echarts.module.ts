import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApacheEchartsRoutingModule } from './apache-echarts-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NestedPiesComponent } from './nested-pies/nested-pies.component';



@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    NestedPiesComponent
  ],
  imports: [
    CommonModule,
    ApacheEchartsRoutingModule,
    NgxEchartsModule.forRoot({ echarts })
    
  ]
})
export class ApacheEchartsModule { }
