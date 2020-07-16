import { Restaurant } from './../Restaurant';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-restaurant',
  templateUrl: './register-restaurant.component.html',
  styleUrls: ['./register-restaurant.component.scss']
})
export class RegisterRestaurantComponent implements OnInit {

  public restaurant: Restaurant = new class implements Restaurant{
    restaurantId: number;
    restaurantName: string;
    email: string;
    password:string;
    mobileNo: string;
    active: true;
    role: string;
    address: string;
  };


  constructor(public register: RegistrationService, public router: Router) { }

  ngOnInit(): void {
  }
  
  registerRestaurant(){
    if (this.restaurant.restaurantName != null && this.restaurant.email != null && this.restaurant.password != null
      && this.restaurant.mobileNo != null && this.restaurant.address!=null){
        this.register.registerRestaurant(this.restaurant).subscribe(data => {
          alert('Registered Successfully!');
        })
      } else{
        alert('Please fill all the details');
      }
  }
}
