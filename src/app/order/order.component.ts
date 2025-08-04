import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  order:Array<any>=[];
  status : any="";
  error : string ="";
  customerName:string = '';
  phoneNumber:string = '';
  bill:number=0;
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  calculateBill() {
    //   Fill the code
    try{
      this.validation();
      this.bill = this.orderService.calculateBill();
      this.status="Please pay $"+this.bill;
    }catch(e:any){
      this.error=e.message;
    }
  }

  getOrder() {
    //   Fill the code
    this.order=this.orderService.getOrder();


  }

  validation() {
    //   Fill the code
    var str="";
    if(this.customerName==undefined|| this.customerName.length<=0){
       str+="Provide value for Customer name";
    }
    if(this.phoneNumber==undefined|| this.phoneNumber.length<=0){
      str+="Provide value for phone number";
   }
   if(str!=""){
    throw new Error(str);
   }

  }
}

