import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from './product.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productInfo: Array<{ product: Product, quantity: number; }> = [];
  totalAmount: number;
  totalProducts: number;

  deleteCart = new Subject<string>();

  constructor(private productService: ProductService) {
    this.initCart();
  }

  // Ajoute / Incrémente un produit au panier
  addProduct(product: Product, qty: number=1) {
    console.log('addProduct qty ' + qty);
    const index = this.productInfo.findIndex(pInfo => pInfo.product.id === product.id);
    if (index!==-1) {
       this.productInfo[index].quantity += qty;
    } else {
      this.productInfo.push({product, quantity: qty});
    }
    this.totalProducts += qty;
    this.totalAmount = this.totalAmount + (qty *product.price) ;
    this.saveStorage();


  }

  // Décrémente / Retire un produit du panier
  removeProduct(product: Product) {
    const index = this.productInfo.findIndex(pInfo => pInfo.product.id === product.id);
    if (index!==-1) {
       this.productInfo[index].quantity--;
       if (this.productInfo[index].quantity ===0) {
        this.productInfo.splice(index, 1);
       }
       this.totalProducts--;
       this.totalAmount = this.totalAmount - product.price;
       this.saveStorage();
    }
  }

  // Renvoie le contenu du panier
  getAllProducts() {
  //  this.initCart();
    return this.productInfo;
  }

  initCart() {
    this.productInfo   = [];
    this.totalAmount = 0;
    this.totalProducts = 0;

    const arrayStor =  localStorage.getItem('myCart');

    if (arrayStor) {
    const arrayStorageObj =  JSON.parse(arrayStor);
    this.productService.getProducts().subscribe(products => {
      arrayStorageObj.forEach(cartItem => {
            const product = products.find(p => p.id === cartItem.id);
            this.addProduct(product, cartItem.quantity);
      })
    });
  }

    //    const result = arrayStorageObj.map(cartItem => {
    //      return {
    //        product: products.find(p => p.id === cartItem.productId),
    //        quantity: cartItem.quantity,
    //      }
    //    }
    //    )
    // });
    // arrayStorageObj.forEach(element =>  {
    //     this.productService.getProduct(arrayStorage.id)
    //    .subscribe(data =>   this.productInfo.push(data ;arrayStorage.quantity)})})
    //     const obj = {id:data, quantity: arrayStorage.quantity};
    //     this.productInfo.push(obj)
    // }
    //   )
  }

  getNumForProduct(productId: number): number {
    const pInfo = this.productInfo.find(p => p.product.id === productId);
    return pInfo ? pInfo.quantity :0 ;
  }

  saveStorage(){
    console.log('savestaorge')
    const arrayStorage = this.productInfo.map(element => {
    const obj ={id: element.product.id , quantity: element.quantity};
    return obj;
    });
    localStorage.setItem('myCart', JSON.stringify(arrayStorage));
  }

  deletePanier() {
    localStorage.clear();
    this.productInfo = [];
    this.totalAmount = 0;
    this.totalProducts = 0 ;
    this.deleteCart.next('delete');
  }
}