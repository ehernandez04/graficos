import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiChartComponent } from './multi-chart/multi-chart.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';

const routes: Routes = [
  {
    path: 'multi-chart',
    component: MultiChartComponent,
    pathMatch: 'full'
  },
  {
    path: 'organigrama',
    component: OrganigramaComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleChartsRoutingModule { }
