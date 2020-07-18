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
  constructor(public loginService: AuthenticationService, private userService: UserService, private restService: RestaurantService) { }

  ngOnInit(): void {
   const r = sessionStorage.getItem('role');
   if(r!=null || r!='')
      this.role = r;
  }
  
  }

 
