import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './Restaurant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient ) { }
  private url = 'http://localhost:2019';

  registerRestaurant(restaurant: Restaurant){
    return this.http.post(this.url+'/'+'addRestaurant', restaurant);
  }

  registerCustomer(user: User){
    return this.http.post(this.url+'/'+'addUser', user);
  }
}
