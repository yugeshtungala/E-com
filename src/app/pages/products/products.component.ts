import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  shirt:any;
  
  constructor(private ser:CommonService) { }

  getshirts(){
    return this.ser.products;
  }   
  addToCart(shirt: any){
    
    if(this.ser.cartItems.hasOwnProperty(shirt.id)){
      this.ser.cartItems[shirt.id].quantity +=1;
    }else{
      this.ser.cartItems[shirt.id]={quantity:1,image:shirt.image,name:shirt.name,price:shirt.price}
      this.ser.cart.push(shirt.id)
    }

   
}



  ngOnInit() {
  }

}
