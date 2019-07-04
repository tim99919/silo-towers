import { Component, OnInit } from '@angular/core';

import { IndicatorService } from '../indicator.service';
import { Indicator } from '../indicator';

@Component({
  selector: 'app-tower-info',
  templateUrl: './tower-info.component.html',
  styleUrls: ['./tower-info.component.sass']
})
export class TowerInfoComponent implements OnInit {
  indicators: Indicator[];

  getCurrentLevel(value, maxValue, minValue) {
    return Math.round((value - minValue) / (maxValue - minValue) * 100);
  }

  constructor(
    private indicatorService: IndicatorService
  ) {
    this.indicators = this.indicatorService.getIndicators();
  }

  ngOnInit() {
  }

}
