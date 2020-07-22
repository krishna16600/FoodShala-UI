import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  public food:Item = new class implements Item{
    foodId: number;
    foodName:string;
    foodType:string;
    price:string;
  }
  
  constructor(public restService: RestaurantService, public router: Router) { }

  ngOnInit(): void {
  }
  addItem(){
    if(this.food.foodName!=null && this.food.foodType!=null &&this.food.price!=null){
      this.restService.addItem(this.food).subscribe(data =>{
        alert(data);
        this.router.navigate(['restaurant-menu'])
      })
    } else{
      alert("Enter All Details");
      location.reload()
    }
  } 
}
