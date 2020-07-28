import Swal from 'sweetalert2'
import { RestaurantService } from './../restaurant.service';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username='';
  password='';
  isLogged;
  invalidLogin = false;
  role: any;
  constructor(public router: Router, public auth: AuthenticationService, public service: AppService, public restSerivce: RestaurantService) { }

  ngOnInit(): void {
  }

    login(){
       this.auth.authenticate(this.username, this.password).subscribe(data => {

      this.invalidLogin = false;

      if(!this.invalidLogin){
         this.restSerivce.getRole(this.username).subscribe(async data1 => {
          await Swal.fire({
            icon:'success',
            title:'Credentials verified',
            text:'Successfully logged in',
            timer:1000
          })
            this.role = data1;
            sessionStorage.setItem('role', this.role);
            if(this.role=='customer'){
              this.router.navigate(['home']);
            }
            else{
              this.router.navigate(['restaurant-menu']);
            }
          })
      }
    }, async error => {
      await Swal.fire({
        icon: 'error',
        title:'Oops..',
        text: 'Incorrect Username/Password',
        timer:2000
      })
      this.invalidLogin = true;
      location.reload();
      
    })
  }

  checkRestaurantLogin(){
      this.auth.authenticateRestaurant(this.username, this.password).subscribe(data => {
          this.invalidLogin = false;
          this.router.navigate(['restaurant-menu']);
      }, error => {
        this.invalidLogin = true;
      })
  }
  
}
