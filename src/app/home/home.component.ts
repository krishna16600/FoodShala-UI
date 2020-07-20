import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any;
  role: any;
  constructor(private restaurantService: RestaurantService, public authentication: AuthenticationService, private cartService: CartService) { }

  ngOnInit(): void {
    this.restaurantService.getAllFoodItems().subscribe(data => {
      this.items = data;
    })  
    const r = sessionStorage.getItem('role');
    if(r!=null || r!='')
       this.role = r;
  }

  addToCart(foodId: number){
    this.cartService.addToCart(foodId).subscribe(data => {
      alert(data);
    })
  }

}
