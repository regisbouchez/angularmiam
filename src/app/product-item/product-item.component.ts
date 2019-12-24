import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product;

  numProducts: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.numProducts = this.cartService.getNumForProduct(this.product.id);

    }




}
