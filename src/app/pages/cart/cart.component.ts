import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 

  constructor(private service:CommonService) { }

 total=0;
 cart=[];
 cartItems={};

  
  del(){
    this.service.cart.splice(1,1);
  }
   ngOnInit() {
  
    this.cartItems=this.service.cartItems;
    this.cart=this.service.cart; 
    this.getTotal() 

  }
  getTotal(){
    this.total=0;
    for(let val of this.cart){
      this.total += (this.service.cartItems[val].quantity*this.service.cartItems[val].price);
       
      this.cartItems=this.service.cartItems;
      this.cart=this.service.cart;
    }
    }

  }



