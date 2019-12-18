import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  cart=[];
  img1="assets/black.jpeg";
  img2="assets/green.jpeg";
  img3="assets/red.jpeg";
  img4="assets/white.jpeg";
  img5="assets/nagcheck.jpeg";
  img6="assets/nagbunny.jpeg";
  img7="assets/nagbrown.jpeg";
  img8="assets/na.jpg";
 

  constructor() { } 
  products=[
    {name:"Mama's black shirt",price:1000,image:this.img1,quantity:+1 ,pr:"10% off",per:90/100},
   {name:"Mama's green shirt",price:9000,image:this.img2,quantity:+1,pr:"10% off",per:90/100},
    {name:"Mama's red shirt",price:8000,image:this.img3,quantity:+1,pr:"35% off",per:65/100},
  {name:"Mama's white shirt",price:7000,image:this.img4,quantity:+1,pr:"80% off",per:20/100},
  {name:"Babai's check shirt",price:1000,image:this.img5,quantity:+1,pr:"50% off",per:50/100},
   {name:"Babai's light shirt",price:9000,image:this.img6,quantity:+1,pr:"40% off",per:60/100},
    {name:"Babai's blue t-shirt",price:8000,image:this.img7,quantity:+1,pr:"70% off",per:30/100},
  {name:"Babai's blacks shirt",price:7000,image:this.img8,quantity:+1,pr:"5% off",per:95/100},
  ];
  
 
}
