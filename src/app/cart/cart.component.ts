import { CartService } from './../cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  items: any;
  quantity: number;
  price: number;
  constructor(private router: Router, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
      this.cartService.showCart().subscribe(data => {
        this.items = data;
        console.log(this.items);
        
      })
  }

  increaseQuantity(foodId){
    this.cartService.addToCart(foodId).subscribe(data => {
     this.cartService.showCart().subscribe(data1 => {
       this.items = data1;
     })

    })
  }

  decreaseQuantity(foodId){
    this.cartService.decreaseQuant(foodId).subscribe(data => {
      this.cartService.showCart().subscribe(data1 => {
        this.items = data1;
      })
    })
  }

}
