import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { ProductButtonsComponent } from './product-buttons/product-buttons.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    OrderInfoComponent,
    ProductButtonsComponent,
    CartIconComponent,
    CartDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataViewModule,
    PanelModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

