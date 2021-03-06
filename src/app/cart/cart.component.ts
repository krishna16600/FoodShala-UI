import { CartService } from './../cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  items: any;
  quantity: number;
  total: number;
  constructor(public router: Router, public route: ActivatedRoute, public cartService: CartService) { }

  ngOnInit(): void {
      this.cartService.showCart().subscribe(data => {
        this.items = data;
        let length = this.items.length;
        let total = 0;
        let quantity = 0;
        for(let i=0;i<length;i++){
          total= total + Number(this.items[i].foodItem.price)* Number(this.items[i].quantity);
          quantity = quantity + Number(this.items[i].quantity);
        }
        this.quantity = quantity;
          this.total = total;
        
      })
  }

  increaseQuantity(foodId){
    this.cartService.addToCart(foodId).subscribe(data => {
     this.cartService.showCart().subscribe(data1 => {
       this.items = data1;
       let length = this.items.length;
       let total = 0;
       let quantity = 0;
       for(let i=0;i<length;i++){
         total= total + Number(this.items[i].foodItem.price)* Number(this.items[i].quantity);
         quantity = quantity + Number(this.items[i].quantity);
       }
       this.quantity = quantity;

         this.total = total;
     })

    })
  }

  decreaseQuantity(foodId){
    this.cartService.decreaseQuant(foodId).subscribe(data => {
      this.cartService.showCart().subscribe(data1 => {
        this.items = data1;
        let length = this.items.length;
        let total = 0;
       
        let quantity = 0;
        for(let i=0;i<length;i++){
          total= total + Number(this.items[i].foodItem.price)* Number(this.items[i].quantity);
          quantity = quantity + Number(this.items[i].quantity);
        }
        this.quantity = quantity;
          this.total = total;
      })
    })
  }

  removeItem(foodId){
    this.cartService.removeItem(foodId).subscribe(async data => {
      await Swal.fire({
          icon:'success',
          title:'Item removed from cart',
          timer:1000
      })
      this.cartService.showCart().subscribe(data1 => {
        this.items = data1;
        let length = this.items.length;
        let total = 0;
       
        let quantity = 0;
        for(let i=0;i<length;i++){
          total= total + Number(this.items[i].foodItem.price)* Number(this.items[i].quantity);
          quantity = quantity + Number(this.items[i].quantity);
        }
        this.quantity = quantity;
          this.total = total;
      })
    })
  }

  checkout(){
    this.cartService.checkout().subscribe(async data => {
      await Swal.fire({
        icon:'success',
        title:'Joy Of Happiness!',
        text:'Order placed successfully..',
        timer:2000
      })
      this.router.navigate(['home']);
    })
  }
}
