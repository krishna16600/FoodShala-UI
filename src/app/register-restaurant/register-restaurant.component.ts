import { Restaurant } from './../Restaurant';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  
  mobPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  registerRestaurant(){
    if (this.restaurant.restaurantName != null && this.restaurant.email != null && this.restaurant.password != null
      && this.restaurant.mobileNo != null && this.restaurant.address!=null){
        this.register.registerRestaurant(this.restaurant).subscribe(async data => {
          await Swal.fire({
            icon:'success',
            title:'Success',
            text:'Restaurant registered sucessfully!',
            timer:1000
          })
          this.router.navigate(['login']);
        })
      } else{
         Swal.fire({
          icon:'error',
          title:'Oops.. ',
          text:'Seems like some fields are empty',
          timer:1000
        })
      }
  }
}
