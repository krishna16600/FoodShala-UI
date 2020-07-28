import { RestaurantService } from './../restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  async addItem(){
    if(this.food.foodName!=null && this.food.foodType!=null &&this.food.price!=null){
      this.restService.addItem(this.food).subscribe(async data =>{
       await Swal.fire({
         icon:'success',
         title:'Item added to the menu',
         timer:1000
       })
        this.router.navigate(['restaurant-menu'])
      })
    }  else{
       await Swal.fire({
        icon:'error',
        title:'Oops..',
        text:'Seems like some fields are empty, try again!',
        timer:3000,
      })
      location.reload()
    }
  } 
}
