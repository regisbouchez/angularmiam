import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  currentProduct: Product;
  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.productService.getProductBySlug(slug).subscribe(data => this.currentProduct = {...data, photo: enlargeImage(data.photo)})
  }
}
function enlargeImage(imagePath: string): string {
    return imagePath.replace('h_240,w_318', 'h_720,w_954');
}
