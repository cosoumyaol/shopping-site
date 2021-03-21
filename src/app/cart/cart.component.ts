import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  items= JSON.parse(JSON.stringify(this.cartService.getItems()));
  constructor(private cartService: CartService) {
    console.log(this.items)
  }
  claerCart(){
    this.items=this.cartService.clearCart();
  }
  removeFromCart(item:number){
    this.items=this.cartService.removeItem(item);
  }
}
