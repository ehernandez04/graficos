import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {

  // Asignar Highcharts a una variable
  Highcharts: typeof Highcharts = Highcharts;

  // Definir las opciones del gráfico
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Ventas mensuales'
    },
    xAxis: {
      categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']
    },
    yAxis: {
      title: {
        text: 'Miles de euros'
      }
    },
    series: [{
      type: 'column',
      name: 'Ventas',
      data: [100, 200, 150, 300, 250, 400]
    }]
  };

  constructor() {
    // Asignar Highcharts a una variable
    this.Highcharts = Highcharts;

    // Inicializar el módulo de exportación
    require('highcharts/modules/exporting')(Highcharts);
  }

  exportChart() {
    // Obtener el objeto chart
    let chart = this.Highcharts.chart('chart', this.chartOptions);

    let exportOptions: Highcharts.ExportingOptions = {
      sourceWidth: 800,
      sourceHeight: 600
    };

    // Exportar el gráfico como PNG
    chart.exportChart({
      type: 'image/png',
      filename: 'ventas'
    }, exportOptions);
  }
}
