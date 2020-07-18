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
  constructor(private router: Router, private auth: AuthenticationService, private service: AppService, private restSerivce: RestaurantService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.authenticate(this.username, this.password).subscribe(data => {

      this.invalidLogin = false;

      if(!this.invalidLogin){
          this.restSerivce.getRole(this.username).subscribe(data1 => {
            console.log(data1);
            this.role = data1;
            sessionStorage.setItem('role', this.role);
            if(this.role=='customer')
              this.router.navigate(['home']);
            else
              this.router.navigate(['restaurant-menu']);
          })
      }
    }, error => {
      alert("Invalid Credentials");
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
