import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppComponent } from './app.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      { path: '', redirectTo: 'liste', pathMatch: 'full' },
      { path: 'liste', component: ProductListComponent },
      { path: 'panier', component: CartDetailComponent },
      { path: 'produits/:slug', component: ProductDetailComponent  },
      { path: '**',  redirectTo: 'home', pathMatch: 'full'},
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
