import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Dashboard = "Dashboard";

  products = [{
    'mobile': 'One plus 6',
    'comapany': 'One plus',
    'manufacture': 'China',
    'owner': 'Someone',
    'price': '40,000'
  },
  {
    'mobile': 'One plus 6',
    'comapany': 'One plus',
    'manufacture': 'China',
    'owner': 'Someone',
    'price': '40,000'
  },
  {
    'mobile': 'One plus 6',
    'comapany': 'One plus',
    'manufacture': 'China',
    'owner': 'Someone',
    'price': '40,000'
  },
  {
    'mobile': 'One plus 6',
    'comapany': 'One plus',
    'manufacture': 'China',
    'owner': 'Someone',
    'price': '40,000'
  },
  {
    'mobile': 'Canvas',
    'comapany': 'Micromax',
    'manufacture': 'China',
    'owner': 'New',
    'price': '10,000'
  },
  {
    'mobile': 'Xs max',
    'comapany': 'Apple',
    'manufacture': 'USA',
    'owner': 'Someone',
    'price': '80,000'
  },
  {
    'mobile': 'Zx',
    'comapany': 'Sony',
    'manufacture': 'China',
    'owner': 'Someone',
    'price': '40,000'
  },
  {
    'mobile': 'V11 pro',
    'comapany': 'Vivo',
    'manufacture': 'China',
    'owner': 'Someone',
    'price': '20,000'
  },
  {
    'mobile': 'F11 pro',
    'comapany': 'Oppo',
    'manufacture': 'India',
    'owner': 'Someone',
    'price': '20,000'
  },
  {
    'mobile': 'Galaxy',
    'comapany': 'Samsung',
    'manufacture': 'China',
    'owner': 'Someone',
    'price': '40,000'
  }]
  tableHeader = ["S.no", "MobilePhone", "Company", "Manufacture", "Owner", "Price"]
  constructor() { }

  ngOnInit() {
  }

}
