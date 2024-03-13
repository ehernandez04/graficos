import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiChartDataService {

  constructor(private httpClient: HttpClient) { }

  getChartData(): Observable<Array<Array<string | number>>>{
    return this.httpClient.get<Array<Array<string | number>>>('http://localhost:3000/chartData');
  }
}
