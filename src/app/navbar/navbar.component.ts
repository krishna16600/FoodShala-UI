import { RestaurantService } from './../restaurant.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  role: any;
  uName: any;
  constructor(public loginService: AuthenticationService, public userService: UserService, public restService: RestaurantService) { }

  ngOnInit(): void {
   const r = sessionStorage.getItem('role');
   const n = sessionStorage.getItem('username');
   if(n!=null || n!='')
      this.uName = n;

   if(r!=null || r!='')
      this.role = r;
  }
  
  }

 
