import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public grandTotal!:number;

  @ViewChild('name') namekey!:ElementRef;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getfooditem()
    .subscribe(res=>{
      this.grandTotal=this.cartservice.getTotalPrice();
    })
  }
  congratsname(){
    localStorage.setItem("name",this.namekey.nativeElement.value);
  }

}
