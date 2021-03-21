import { Injectable } from '@angular/core';
import { Product } from './shared/supermaket.types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Object[]=[];
  addToCart(Product:Object){
    this.items.push(Product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
  removeItem(item:number){
    this.items.splice(item,1);
    return this.items;
  }
}
