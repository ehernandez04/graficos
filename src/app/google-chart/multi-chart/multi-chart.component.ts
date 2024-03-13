import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, GoogleChartComponent } from 'angular-google-charts';
import { MultiChartDataService } from '../service/multi-chart-data.service';
import * as canvg from 'canvg';

@Component({
  selector: 'app-multi-chart',
  templateUrl: './multi-chart.component.html',
  styleUrl: './multi-chart.component.scss'
})
export class MultiChartComponent implements OnInit {

  @ViewChild('chart') chart!: GoogleChartComponent;

  title = 'google-charts';
  myType = ChartType.LineChart;
  chartData: Array<Array<string | number>> = [];
  is3D = false;

  options = { 
    is3D: this.is3D
  };

  constructor(private multiChartDataService: MultiChartDataService){

  }

  ngOnInit(): void {
    this.getChartData();
  }

  private getChartData(){
    this.multiChartDataService.getChartData()
    .subscribe(data => {
      this.chartData = data;
    })
  }

  changeType(type:string){

    switch(type){
      case 'LineChart':
        this.myType = ChartType.LineChart;
        this.is3D = false;
        this.options = { 
          is3D: this.is3D
        };
        break;

      case 'BarChart':
        this.myType = ChartType.BarChart;
        this.is3D = false;
        this.options = { 
          is3D: this.is3D
        };
        break;

      case 'ColumnChart':
        this.myType = ChartType.ColumnChart;
        this.is3D = false;
        this.options = { 
          is3D: this.is3D
        };
        break;

      case 'PieChart':
        this.myType = ChartType.PieChart;
        this.is3D = false;
        this.options = { 
          is3D: this.is3D
        };
        break;

      case '3DPieChart':
        this.is3D = true;
        this.options = { 
          is3D: this.is3D
        };
        this.myType = ChartType.PieChart;
        break;

      case 'Histogram':
        this.myType = ChartType.Histogram;
        this.is3D = false;
        this.options = { 
          is3D: this.is3D
        };
        break;

      case 'Gauge':
        this.myType = ChartType.Gauge;
        this.is3D = false;
        this.options = { 
          is3D: this.is3D
        };
        break;

      case 'ComboChart':
        this.myType = ChartType.ComboChart;
        this.is3D = false;
        this.options = { 
          is3D: this.is3D
        };
        break;

      case 'Table':
      this.myType = ChartType.Table;
      this.is3D = false;
      this.options = { 
        is3D: this.is3D
      };
      break;

      case 'AreaChart':
      this.myType = ChartType.AreaChart;
      this.is3D = false;
      this.options = { 
        is3D: this.is3D
      };
      break;

      case 'Scatter':
      this.myType = ChartType.Scatter;
      this.is3D = false;
      this.options = { 
        is3D: this.is3D
      };
      break;
    }
    
  }
  
  // Convertimos el gráfico a Canvas y despues a PNG
  downloadAsPNG() {
    const chartWrapper = this.chart.chartWrapper;
    const chart = chartWrapper.getChart();
    if (chart) {
      try {
        const container = chart.getContainer();
        const svg = container.getElementsByTagName('svg')[0];
        if (svg) {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const v = canvg.Canvg.fromString(ctx, svg.outerHTML);
            v.start();
            const png = canvas.toDataURL();
            const link = document.createElement('a');
            link.download = 'chart.png';
            link.href = png;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            console.error('No se pudo obtener el contexto 2D del canvas.');
          }
        } else {
          console.error('No se pudo generar la imagen PNG porque el gráfico no se dibuja en un elemento SVG.');
        }
      } catch (error) {
        console.error('Error al generar la imagen PNG:', error);
      }
    } else {
      console.error('El gráfico no está disponible.');
    }
  }
  
  
  

}
