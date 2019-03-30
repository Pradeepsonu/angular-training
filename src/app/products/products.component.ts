import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() srcUrl = '';
  @Input() model = '';
  @Input() price = '';
  products = [];
  tableHeader = ["S.no", "MobilePhone", "Company", "Manufacture", "Owner", "Price"]
  constructor(private productService: ProductServiceService) { }

  async  ngOnInit() {
    const products = await this.productService.getProducts()
    // console.log(products);
    this.products = products['products'];
  }
}