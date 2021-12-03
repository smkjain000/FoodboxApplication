import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalitem:number=0;
  public searchTerm:string='';


  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getfooditem()
    .subscribe(res=>{
      this.totalitem=res.length;
    })
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);
    
    
  }

}
