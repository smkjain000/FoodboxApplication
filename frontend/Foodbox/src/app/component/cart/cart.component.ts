import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public fooditem:any=[];
  public grandTotal!:number;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getfooditem()
    .subscribe(res=>{
      this.fooditem=res;
      this.grandTotal=this.cartservice.getTotalPrice();
    })

  }

  removeItem(item:any){
    this.cartservice.reovecartItem(item);
  }

  emptycart(){
    this.cartservice.removeAllcart();
  }

}
