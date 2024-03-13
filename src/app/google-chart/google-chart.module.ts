import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleChartsRoutingModule } from './google-charts-routing.module';
import { MultiChartComponent } from './multi-chart/multi-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatButtonModule } from '@angular/material/button';
import { OrganigramaComponent } from './organigrama/organigrama.component';


@NgModule({
  declarations: [
    MultiChartComponent,
    OrganigramaComponent
  ],
  imports: [
    CommonModule,
    GoogleChartsRoutingModule,
    GoogleChartsModule,
    MatButtonModule
  ]
})
export class GoogleChartModule { }
