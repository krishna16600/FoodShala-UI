import { HttpClient } from '@angular/common/http';
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
}
