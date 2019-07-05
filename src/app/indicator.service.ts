import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndicatorService {


  getIndicators() {
    return this.http.get(environment.dataUrl);
  }

  constructor(
    private http: HttpClient,
  ) { }
}
