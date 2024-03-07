import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit{

  public chart!: Chart;
  lblTitle: string = 'DataSet 1';

  ngOnInit(): void {

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: this.lblTitle,
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };


    this.chart = new Chart("lineChart", {
      type: 'line' as ChartType,
      data
    });

  }

  ngOnDestroy(): void {
    this.chart.destroy();
  }

  addDataset(){

    const data = this.chart.data;
    const newDataset = {
      label: 'Dataset ' + (data.datasets.length + 1),
      data: this.generarArrayAleatorio(7),
      fill: false,
      borderColor: this.generarRGBAleatorio(),
      tension: 0.1
    };
    this.chart.data.datasets.push(newDataset);
    this.chart.update();
  }

  removeDataset(){
    this.chart.data.datasets.pop();
    this.chart.update();
  }

   generarRGBAleatorio() {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);
    return `rgb(${rojo}, ${verde}, ${azul})`;
  }

  generarArrayAleatorio(longitud: number) {
    let array = [];
    for(let i = 0; i < longitud; i++) {
      array.push(Math.floor(Math.random() * 100));
    }
    return array;
  }
}
