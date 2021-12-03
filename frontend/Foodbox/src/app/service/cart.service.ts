import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[]
  public fooditemlist=new BehaviorSubject<any>([])
  public search=new BehaviorSubject<string>("");

  constructor() { }

  getfooditem(){
    return this.fooditemlist.asObservable();
  }

  setfooditem(fooditem:any){
    this.cartItemList.push(...fooditem);
    this.fooditemlist.next(fooditem);


  }

  addtocart(fooditem:any){
    this.cartItemList.push(fooditem);
    this.fooditemlist.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }

  reovecartItem(fooditem:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(fooditem.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.fooditemlist.next(this.cartItemList);
  }
  removeAllcart(){
    this.cartItemList=[];
    this.fooditemlist.next(this.cartItemList);
  }
}
