import { User } from './../User';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  constructor(public register: RegistrationService, public router: Router) { }

  ngOnInit(): void {
  }
  mobPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  registerUser(){
    console.table(this.user);
    
    if(this.user.name!=null && this.user.password!=null && this.user.email!=null && this.user.gender!=null && this.user.preference!=null && 
      this.user.mobileNo!=null){
          this.register.registerCustomer(this.user).subscribe(async data => {
           
            if(data=='User Already Exists'){
              await Swal.fire({
                icon:'error',
                title:'User Already Exists',
                timer:1000
              })
              location.reload();
            }
              else{
                await Swal.fire({
                  icon:'success',
                  title:'Success',
                  text:'User Added Successfully',
                  timer:1000
                })
                this.router.navigate(['login']);
              }
          })
    } else{
     Swal.fire({
       icon:'error',
       title:'Oops..',
       text:'Try again',
       timer:1000
     })
    }
  }
}
