import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductType } from '../models/product-type.enum';
import { SearchService } from '../services/search.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  starters: Product[];
  mainCourses: Product[];
  desserts: Product[];

  productListFilter: Product[];

  choice: string;


  constructor(private productService: ProductService,
              private searchService: SearchService
    ) { }

  ngOnInit() {
     console.log("ngOninit liste ");
     this.productService.getProducts().subscribe(data => {
     this.productList = data ;
     this.starters = this.productList.filter(p=>p.type === ProductType.Entree);
     this.mainCourses = this.productList.filter(p=>p.type === ProductType.Plat);
     this.desserts = this.productList.filter(p=>p.type === ProductType.Dessert);
     this.choice = 'all';

     }
      );
     this.searchService.searchSubject.subscribe(text => {
       console.log("search" + text);
       const productsFiltered =  this.productList.filter(product => product.name.indexOf(text) !== -1);
       this.starters = productsFiltered.filter(p=>p.type === ProductType.Entree);
       this.mainCourses = productsFiltered.filter(p=>p.type === ProductType.Plat);
       this.desserts = productsFiltered.filter(p=>p.type === ProductType.Dessert);

  });
  }
  selectChoice(choice: string) {
    this.choice = choice;
    console.log("choice" + this.choice);
  }

}
