import { Component, OnInit } from '@angular/core';

import { towers } from '../towers';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.sass']
})
export class TowerComponent implements OnInit {
  towers = towers;

  getTowerLevel(value, maxValue) {
    let bottomCoordinate = 405;
    let upperCoordinate = 15;
    let fullLevel = bottomCoordinate - upperCoordinate;
    let currentLevel = bottomCoordinate - Math.floor((value / maxValue) * fullLevel);

    return '18,405 18,' + currentLevel + ' 136.5,' + currentLevel + ' 136.5,405'
  }

  constructor() { }

  ngOnInit() {
  }

}
