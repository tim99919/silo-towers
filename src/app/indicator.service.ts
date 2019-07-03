import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  getIndicators() {
    return this.http.get('/assets/towers.json');
  }

  constructor(
    private http: HttpClient,
  ) { }
}