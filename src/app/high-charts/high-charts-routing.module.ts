import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighChartsRoutingModule { }
