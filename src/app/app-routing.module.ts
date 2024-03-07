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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
