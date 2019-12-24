import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
  totalProduct: number;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.totalProduct = this.cartService.totalProducts;
  }

  refreshTotal(){
    return this.cartService.totalProducts;
  }

}
