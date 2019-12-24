import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';


@Component({
  selector: 'app-product-buttons',
  templateUrl: './product-buttons.component.html',
  styleUrls: ['./product-buttons.component.css']
})
export class ProductButtonsComponent implements OnInit {

  @Input() numProducts: number;
  @Input() product: Product;


  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addProduct() {
    this.numProducts ++;
    this.cartService.addProduct(this.product);
  }

  removeProduct() {
    this.numProducts --;
    this.cartService.removeProduct(this.product);
  }

}
