import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  @Input() success;
  @Input() message;

  constructor() { }
  login() {
  }

  isDefined() {
    return this.success !== undefined
  }

  isValid() {
    return this.success
  }

  ngOnInit() {
  }

}
