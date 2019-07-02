import { Component, OnInit } from '@angular/core';

import { towers } from '../towers';

@Component({
  selector: 'app-tower-info',
  templateUrl: './tower-info.component.html',
  styleUrls: ['./tower-info.component.sass']
})
export class TowerInfoComponent implements OnInit {
  towers = towers;

  getCurrentLevel(value, maxValue, minValue) {
    return Math.round((value - minValue) / (maxValue - minValue) * 100);
  }

  constructor() { }

  ngOnInit() {
  }

}
