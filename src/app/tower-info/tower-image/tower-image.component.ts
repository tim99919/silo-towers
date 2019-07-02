import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tower-image',
  templateUrl: './tower-image.component.html',
  styleUrls: ['./tower-image.component.sass']
})
export class TowerImageComponent implements OnInit {
  @Input() tower;

  bottomCoordinate = 405;
  upperCoordinate = 15;
  fullLevel = this.bottomCoordinate - this.upperCoordinate;

  getTowerLevel(value, maxValue, minValue) {
    let currentLevel = (value > minValue && value < maxValue) ? this.bottomCoordinate - Math.floor(((value - minValue) / (maxValue - minValue)) * this.fullLevel) :
    (value <= minValue) ? this.bottomCoordinate : this.upperCoordinate;

    return '18,405 18,' + currentLevel + ' 136.5,' + currentLevel + ' 136.5,405';
  }

  constructor() { }

  ngOnInit() {
  }

}
