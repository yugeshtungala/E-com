import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
p:any;
  constructor(private ser:CommonService) { }
  getshirts(){
    return this.ser.products;
  }   
  addToCart(p){
   this.ser.cart.push(p)
}
  ngOnInit() {
  }

}
