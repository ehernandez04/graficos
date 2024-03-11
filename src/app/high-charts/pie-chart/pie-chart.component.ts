import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Accessibility from 'highcharts/modules/accessibility';

Accessibility.default(Highcharts); // Inicializa el módulo 

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {

  isHighcharts = typeof Highcharts === 'object';
  
  // Asignar Highcharts a una variable
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
  },
  title: {
      text: 'Egg Yolk Composition'
  },
  tooltip: {
      valueSuffix: '%'
  },
  subtitle: {
      text:
      'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f}%',
        style: {
          fontSize: '1.2em',
          textOutline: 'none',
          opacity: 0.7
        },
        filter: {
          operator: '>',
          property: 'percentage',
          value: 10
        }
      }
    }
  },
  series: [
    {
      name: 'Percentage',
      colorByPoint: true,
      data: [
        {
          name: 'Water',
          y: 55.02,
          dataLabels: {
            distance: 20
          }
        },
        {
          name: 'Fat',
          sliced: true,
          selected: true,
          y: 26.71,
          dataLabels: {
            distance: 20
          }
        },
        {
          name: 'Carbohydrates',
          y: 1.09,
          dataLabels: {
            distance: 20
          }
        },
        {
          name: 'Protein',
          y: 15.5,
          dataLabels: {
            distance: 20
          }
        },
        {
          name: 'Ash',
          y: 1.68,
          dataLabels: {
            distance: 20
          }
        }
      ]
    }
  ] as any
  
  }

}
