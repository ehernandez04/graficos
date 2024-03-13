import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>  import('./chart-js/chart-js.module').then(
      m => m.ChartJsModule
    ) 
  },
  {
    path: 'chart-js',
    loadChildren: () =>  import('./chart-js/chart-js.module').then(
      m => m.ChartJsModule
    ) 
  },
  {
    path: 'apache-echarts',
    loadChildren: () =>  import('./apache-echarts/apache-echarts.module').then(
      m => m.ApacheEchartsModule
    ) 
  },
  {
    path: 'apex-charts',
    loadChildren: () =>  import('./apex-charts/apex-charts.module').then(
      m => m.ApexChartsModule
    ) 
  },
  {
    path: 'high-charts',
    loadChildren: () =>  import('./high-charts/high-charts.module').then(
      m => m.HighChartsModule
    ) 
  },
  {
    path: 'google-chart',
    loadChildren: () =>  import('./google-chart/google-chart.module').then(
      m => m.GoogleChartModule
    ) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
