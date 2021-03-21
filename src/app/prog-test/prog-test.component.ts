import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';
import { Product } from '../shared/supermaket.types';

@Component({
  selector: 'app-prog-test',
  templateUrl: './prog-test.component.html',
  styleUrls: ['./prog-test.component.css']
})
export class ProgTestComponent{
  productList: Array<Product> = [];
  cart:String='';
  constructor(private productService: ProductsService) {
    this.productService.getProducts().subscribe( data  => {
      this.productList = data.filter( product => product.title.toLowerCase().includes(this.cart.toLowerCase()));
      });
    
    console.log(this.cart);
  }
}
