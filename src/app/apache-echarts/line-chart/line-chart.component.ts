import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit{
  
   option: EChartsOption = {
    title: {
      text: 'Ejemplo de Line Chart'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Ventas', 'Compras']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Ventas',
        type: 'line',
        stack: 'total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Compras',
        type: 'line',
        stack: 'total',
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  };
  ngOnInit(): void {
   
  }

}
