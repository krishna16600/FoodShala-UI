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

  public uname:string;
  user: any;
  isCustomer:string;

  constructor(public loginService: AuthenticationService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
        console.log(data);
        this.user = data;
        this.uname = this.user.name;
        this.isCustomer = this.user.role;
    })
  }

 
}
