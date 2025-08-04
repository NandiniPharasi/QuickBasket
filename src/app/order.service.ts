import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService{

  orderList:Array<any> = [];
  constructor() { }

  addItem(productName : string, quantity : number) {


    this.orderList.push(new Order(productName,quantity));
    // Fill the cod
  }

  getOrder() {
    // Fill the code
    return this.orderList;


  }

  calculateBill() {
    // Fill the code
    var totalBill=0;
    this.orderList.forEach(i=>{
      if(i.productName=="Grains Basket"){
        totalBill+=i.quantity*50;
      }
      else if(i.productName=="Condiments Pack"){
        totalBill+=i.quantity*25;
      }
      else if(i.productName=="Cake Cookery Plater"){
        totalBill+=i.quantity*30;
      }
      else if(i.productName=="Pizza Cookery Plater"){
        totalBill+=i.quantity*30;
      }
      else if(i.productName=="Vegitable Basket"){
        totalBill+=i.quantity*36;
      }
      else if(i.productName=="Fruit Basket"){
        totalBill+=i.quantity*35;
      }
      else if(i.productName=="Meat Pack"){
        totalBill+=i.quantity*28;
      }
      else if(i.productName=="Fish Pack"){
        totalBill+=i.quantity*31;
      }
      else if(i.productName=="Dairy and Eggs combo"){
        totalBill+=i.quantity*15;
      }

    })
    return totalBill;
  }
}
