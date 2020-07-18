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

  addItem(item: any){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')})
    return this.http.post(this.url+'/'+'addFoodItem',item , {headers})
  }

  getFoodItemById(id:number){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')})
    return this.http.get(this.url+'/'+'get-food-item/' + id , {headers});
  }

  editFoodItem(item: any){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')})
    return this.http.post(this.url+'/'+'edit-food-item', item, {headers});
  }

  deletetFoodItem(item: any){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')})
    return this.http.delete(this.url+'/'+'delete-food-item/'+item, {headers});
  }
}
