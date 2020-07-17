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

  constructor(private router: Router, private auth: AuthenticationService, private service: AppService) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.authenticate(this.username, this.password).subscribe(data => {
      this.service.isLoggedIn(true);
      this.invalidLogin = false;
      this.router.navigate(['home']);
    })
  }
}
