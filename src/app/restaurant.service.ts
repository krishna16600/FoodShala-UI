import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:2019';

  getAllFoodItems(){
    return this.http.get(this.url+'/'+'getAllFoodItems');
  }

  getRole(email: string){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')})
    return this.http.get(this.url+'/'+'check-role/'+ email , {headers});
  }

  getRestaurant(){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')})
    return this.http.get(this.url+'/'+'get-restaurant', {headers});
  }

  getMenu(){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')})
    return this.http.get(this.url+'/'+'get-menu', {headers});
  }
}
