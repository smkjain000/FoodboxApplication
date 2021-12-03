import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  public name: string = '';
  public grandTotal!:number;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.cartservice.getfooditem()
    .subscribe(res=>{
      this.grandTotal=this.cartservice.getTotalPrice();
    })
  }
  emptycart(){
    this.cartservice.removeAllcart();
  }

}
