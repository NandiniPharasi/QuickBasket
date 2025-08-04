import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { Order } from './order';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const routes: Routes =[
  //   Fill the code to add routing path

  {path:'products', component:ProductsComponent},
  {path:'order', component:OrderComponent},
  {path:'',redirectTo:'products',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

