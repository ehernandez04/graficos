import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { ColumnDrilldownChartComponent } from './column-drilldown-chart/column-drilldown-chart.component';
const routes: Routes = [
  {
    path: 'line-chart',
    component: LineChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'bar-chart',
    component: BarChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'column-chart',
    component: ColumnChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'column-drilldown-chart',
    component: ColumnDrilldownChartComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighChartsRoutingModule { }
