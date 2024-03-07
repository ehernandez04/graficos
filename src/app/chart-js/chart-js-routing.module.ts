import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

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
    path: 'pie-chart',
    component: PieChartComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJsRoutingModule { }
