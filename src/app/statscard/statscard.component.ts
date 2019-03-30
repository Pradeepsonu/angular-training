import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statscard',
  templateUrl: './statscard.component.html',
  styleUrls: ['./statscard.component.css']
})
export class StatscardComponent implements OnInit {
  @Input() title1 = '';
  @Input() count = 0;
  @Input() iconClass = '';
  @Input() color = 'black';

  constructor() { }

  ngOnInit() {
  }
  getColor() {
    return {
      'font-size': '50px',
      'color': this.color
    }

  }

}
