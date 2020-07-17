import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: any;
  
  constructor(private restaurantService: RestaurantService, public authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.restaurantService.getAllFoodItems().subscribe(data => {
      this.items = data;
      console.table(data);
    })  
  }

}
