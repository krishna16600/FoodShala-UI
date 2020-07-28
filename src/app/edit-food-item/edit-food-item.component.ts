import { RestaurantService } from './../restaurant.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
    this.restService.editFoodItem(this.food).subscribe(async data => {
      await Swal.fire({
        icon:'success',
        title:'Item edited',
        timer:1000
      })
      this.food = data;
       location.reload();
      })
  }

  deleteItem(){
    this.restService.deletetFoodItem(this.foodId).subscribe(async data => {
     await  Swal.fire({
        icon:'success',
        title:'Item deleted',
        timer:1000
      })
      this.router.navigate(['restaurant-menu'])
    })
  }
}
