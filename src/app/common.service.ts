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
    {name:"Mama's black shirt",price:1000,image:this.img1},
   {name:"Mama's green shirt",price:9000,image:this.img2},
    {name:"Mama's red shirt",price:8000,image:this.img3},
  {name:"Mama's white shirt",price:7000,image:this.img4},
  {name:"Babai's check shirt",price:1000,image:this.img5},
   {name:"Babai's skyblue shirt",price:9000,image:this.img6},
    {name:"Babai's blue t-shirt",price:8000,image:this.img7},
  {name:"Babai's blacks shirt",price:7000,image:this.img8},
  ];
 
}
