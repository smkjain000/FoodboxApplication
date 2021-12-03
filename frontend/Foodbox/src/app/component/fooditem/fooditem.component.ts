import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.scss']
})
export class FooditemComponent implements OnInit {

  public fooditemlist:any;
  public filtercategory:any;
  searchkey:string="";

  constructor(private api:ApiService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getFooditem()
    .subscribe(res=>{
      this.fooditemlist=res;
      this.filtercategory=res;

      this.fooditemlist.forEach((a:any)=> {
        Object.assign(a,{quantity:1,total:a.price});
        
      });
      console.log(this.fooditemlist);
    });
    this.cartservice.search.subscribe((val:any)=>{
      this.searchkey=val;
    })
  }

  addtocart(fooditem:any){
    this.cartservice.addtocart(fooditem);

  }

  filter(category:string){
    this.filtercategory=this.fooditemlist
    .filter((a:any)=>{
      if(a.category==category || category==''){
        return a;
      }
      })

  }

}
