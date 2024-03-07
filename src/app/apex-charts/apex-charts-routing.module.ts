import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { ColumnDataLabelsChartComponent } from './column-data-labels-chart/column-data-labels-chart.component';
import { MultipleYAxisChartComponent } from './multiple-y-axis-chart/multiple-y-axis-chart.component';

const routes: Routes = [
  {
    path: 'bar-chart',
    component: BarChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'line-chart',
    component: LineChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'column-chart',
    component: ColumnChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'pie-chart',
    component: PieChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'column-data-labels-chart',
    component: ColumnDataLabelsChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'multiple-y-axis-chart',
    component: MultipleYAxisChartComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApexChartsRoutingModule { }
