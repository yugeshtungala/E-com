import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 

  constructor(private service:CommonService) { }

 

  getcart(){
   return this.service.cart;
  }
  del(){
    this.service.cart.splice(0,1);
  }
   ngOnInit() {
  }


}
