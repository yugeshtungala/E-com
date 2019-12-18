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
   this.ser.cart.push(shirt)
}



  ngOnInit() {
  }

}
