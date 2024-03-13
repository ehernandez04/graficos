import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class MultiChartDataService {
  chartData = [
    [
        "London",
        8136000
    ],
    [
        "New York",
        8538000
    ],
    [
        "Paris",
        2244000
    ],
    [
        "Berlin",
        3470000
    ],
    [
        "Kairo",
        19500000
    ]
  ]
  constructor(private httpClient: HttpClient) { }

  getChartData(): Observable<Array<Array<string | number>>>{
   // return this.httpClient.get<Array<Array<string | number>>>('http://localhost:3000/chartData');

    return of(this.chartData);
  }
}
