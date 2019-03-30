import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() title1 = '';
  @Input() srcUrl = '';
  @Input() count = 0;
  @Input() price = '';
  @Input() iconClass = '';
  id: number;
  constructor() { }

  ngOnInit() {


  }
}