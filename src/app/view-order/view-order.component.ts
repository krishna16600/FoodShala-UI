import { ViewOrderService } from './../view-order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  orders:any;
 
  constructor(public viewService: ViewOrderService, ) {
    type product = {date: Date, menu:any, quantity:any, restaurant:any, user:any};
    var itemListMap: Map<number, product[]> = new Map<number,product[]>();
   }

  ngOnInit(): void {
    this.viewService.viewOrder().subscribe(data => {
    
      

      this.orders = data;
      Object.assign(this.orders).reverse();
      console.log('Orders are ', this.orders);
    })
 
    
  }

}
