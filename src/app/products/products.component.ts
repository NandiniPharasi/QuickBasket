import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { FormsModule } from '@angular/forms';
import { Order } from '../order';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  flag = 0;
  constructor(private orderService : OrderService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // Fill the code
    this.activatedRoute.queryParams.subscribe((params:{[x:string]:string|number}) => {
      this.flag =+ params['flag'];
    })
  }

  addItem(productName:string, quantity : any) {
    // Fill the code
    this.orderService.addItem(productName,quantity);
    console.log("item " + productName,quantity);
  }

}

