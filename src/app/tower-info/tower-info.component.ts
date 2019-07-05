import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';

import { IndicatorService } from '../indicator.service';
import { Indicator } from '../indicator';

@Component({
  selector: 'app-tower-info',
  templateUrl: './tower-info.component.html',
  styleUrls: ['./tower-info.component.sass']
})
export class TowerInfoComponent implements OnInit {
  secondsCounter = interval(1000);
  indicators;

  getIndicators() {
    this.indicatorService.getIndicators()
      .subscribe((data: Indicator[]) => this.indicators = data)
  }

  getCurrentLevel(value, maxValue, minValue) {
    return Math.round((value - minValue) / (maxValue - minValue) * 100);
  }

  constructor(
    private indicatorService: IndicatorService
  ) {
  }

  ngOnInit() {
    this.secondsCounter.subscribe(_ => this.getIndicators());
  }

}

    // const secondsCounter = interval(1000);
    // secondsCounter.subscribe(_ => {
    //   let indicators = this.http.get('/assets/towers.json');
    //   return indicators;
    // })
