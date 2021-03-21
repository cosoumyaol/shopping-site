import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../shared/products.service';
import { Product } from '../shared/supermaket.types';

@Component({
  selector: 'all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent{
  show: boolean = false;
  productList: Array<Product> = [];
  subProductList: Array<Product> = [];
  individualProductList: Array<Product> = [];
  product:Array<Product> = [];
  productType='';
  searchText: string  = '';
  currentItem: String ='';
  constructor(private productService: ProductsService,private cartService:CartService) {
    this.productService.getProducts().subscribe( data  => {
      this.productList = data;
      this.product = data;
    });
    this.productService.searchText$.subscribe( text => this.searchProductByName(text));
    this.productService.getType$.subscribe( text => this.getProductByType(text));
  }
  searchProductByName(text: string){
    this.productService.getProducts().subscribe( data  => {
    this.productList = data.filter( product => product.title.toLowerCase().includes(text.toLowerCase()));
    });
  }
  getProductByType(text: string){
    this.productService.getProducts().subscribe( data  => {
    this.productList = data.filter( product => product.type.toLowerCase().includes(text.toLowerCase()));
    });
  }
  moreInfo(name:string){
    this.show=!this.show;
    this.productService.getProducts().subscribe( data  => {
      this.subProductList = data.filter( product => product.title.toLowerCase().includes(name.toLowerCase()));
      });
  }
  addToCart(product:Object) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
