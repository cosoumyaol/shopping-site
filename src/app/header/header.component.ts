import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products.service';


@Component({
    selector: 'header-main',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private productService: ProductsService){}
  searchProduct(text: string): void {
    this.productService.setSearchText(text);
  }
}
