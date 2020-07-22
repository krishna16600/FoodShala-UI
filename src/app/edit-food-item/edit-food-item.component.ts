import { RestaurantService } from './../restaurant.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-food-item',
  templateUrl: './edit-food-item.component.html',
  styleUrls: ['./edit-food-item.component.scss']
})
export class EditFoodItemComponent implements OnInit {
  food:any;
  public foodId;
  constructor(public router:Router, public route: ActivatedRoute, public restService: RestaurantService) { }

  ngOnInit(): void {
    this.foodId = this.route.snapshot.paramMap.get('id');
    console.log(this.foodId.substring(1));
    this.foodId = this.foodId.substring(1);
    
    this.restService.getFoodItemById(this.foodId).subscribe(data => this.food = data);

  }

  editItem(){
    this.restService.editFoodItem(this.food).subscribe(data => {
      this.food = data;
       location.reload();
      })
  }

  deleteItem(){
    this.restService.deletetFoodItem(this.foodId).subscribe(data => {
      alert(data);
      this.router.navigate(['restaurant-menu'])
    })
  }
}
