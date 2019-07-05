import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  dataUrl: string = '/assets/towers.json';

  getIndicators() {
    return this.http.get(this.dataUrl);
  }

  constructor(
    private http: HttpClient,
  ) { }
}
