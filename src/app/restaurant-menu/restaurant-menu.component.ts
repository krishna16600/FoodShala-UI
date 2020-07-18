import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
  items: any;

  constructor(private restService: RestaurantService) { }

  ngOnInit(): void {
    this.restService.getMenu().subscribe(data => {
      this.items = data;
    })
  }

}
