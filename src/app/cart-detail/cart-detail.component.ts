import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  productInfo: Array<{ product: Product, quantity: number; }> = [];
 // totalAmount: number;
  totalProducts: number;

  constructor(private cartService: CartService) { }


  ngOnInit() {
    this.productInfo = this.cartService.getAllProducts();
   // this.totalAmount = this.cartService.totalAmount;
    this.totalProducts = this.cartService.totalProducts;
    this.cartService.deleteCart.subscribe(data=> { console.log("subject deletecart" + data)
      this.productInfo = this.cartService.getAllProducts();
      this.totalProducts = this.cartService.totalProducts;
     })
  }

  getTotalAmout() {
    return this.cartService.totalAmount;
  }

  deleteCart() {
    console.log("deleteCart");
    this.cartService.deletePanier();
  }

  getTotalProducts() {
    return this.cartService.totalProducts;
  }


}
