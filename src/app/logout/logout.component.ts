import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public loginService: AuthenticationService, public router: Router) { }

  ngOnInit(): void {
    this.loginService.logout();
    this.router.navigate(['login'])
  }

}
