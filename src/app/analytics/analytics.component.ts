import { Component, OnInit, Input } from '@angular/core';
import * as formatNumber from 'simple-format-number';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  @Input() value = '';
  @Input() text = '';
  @Input() iconClass = '';
  @Input() color = 'black';
  id: number;


  constructor() { }

  ngOnInit() {
  }
  getColor() {
    return {
      'color': this.color
    }
  }
  getValue() {
    return formatNumber(this.value);
  }
}
