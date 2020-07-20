import { User } from './../User';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public user: User = new class implements User{
    userId: number;
    name: string;
    password: string;
    mobileNo: string;
    gender: string;
    preference: string;
    active: string;
    email: string;
    role: string;
  }
  constructor(private register: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.table(this.user);
    
    if(this.user.name!=null && this.user.password!=null && this.user.email!=null && this.user.gender!=null && this.user.preference!=null && 
      this.user.mobileNo!=null){
          this.register.registerCustomer(this.user).subscribe(data => {
            alert(data);
            this.router.navigate(['login']);
          })
    } else{
      alert("Couldn't add user");
    }
  }
}
