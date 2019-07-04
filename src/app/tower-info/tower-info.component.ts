import { Component, OnInit } from '@angular/core';

import { IndicatorService } from '../indicator.service';

@Component({
  selector: 'app-tower-info',
  templateUrl: './tower-info.component.html',
  styleUrls: ['./tower-info.component.sass']
})
export class TowerInfoComponent implements OnInit {
  indicators;

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
