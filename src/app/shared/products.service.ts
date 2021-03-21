import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { products } from '../Data/products-all';
import { Product } from './supermaket.types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cart:String='';
  productList : Array<Product>;
  searchText$: Subject<string> = new Subject<string>();
  getType$: Subject<string> = new Subject<string>();
  getCart$: Subject<string> = new Subject<string>();
  constructor() {
    this.productList = <Array<Product>> products;
   }

   getProducts(): Observable<Array<Product>> {
     return of(this.productList);
   }

   setSearchText(text: string) : void {
     this.searchText$.next(text);
   }
   setType(text: string) : void{
     this.getType$.next(text);
   }
   setCart(text: string){
    this.getCart$.next(text);
    this.cart=text;
  }
  getCart(){
    return(this.cart);
  }
}
