import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnDestroy{

  public chart!: Chart;

  ngOnInit(): void {

    const DATA_COUNT = 5;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100}
    
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'Dataset 1',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    this.chart = new Chart("pieChart", {
      type: 'pie' as ChartType,
      data
    })


  }
  ngOnDestroy(): void {
    this.chart.destroy();
  }

  addData(){
    const data = this.chart.data;

    if(data.datasets.length > 0){
      data.labels?.push('data #' + (data.labels.length + 1));

      data.datasets.forEach(dataset => {
        dataset.data.push(Math.floor(Math.random() * 300) + 1);
        (dataset.backgroundColor as any[]).push(this.generarRGBAleatorio());
      })

      this.chart.update();

    }
  }


  generarArrayAleatorio(longitud: number) {
    let array = [];
    for(let i = 0; i < longitud; i++) {
      array.push(Math.floor(Math.random() * 280) + 20);
    }
    return array;
  }

  generarRGBAleatorio() {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);
    return `rgb(${rojo}, ${verde}, ${azul})`;
  }

}
