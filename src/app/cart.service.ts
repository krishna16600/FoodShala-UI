import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  private url = 'http://foodshalaaws-env.eba-ups6kvfu.us-east-2.elasticbeanstalk.com';

  addToCart(foodId: number){  
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url+'/'+'add-item-cart/'+foodId , {headers});
  }

  showCart(){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url+'/show-cart', {headers});
  }

  decreaseQuant(foodId: number){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url+'/'+'decrease-quantity/'+foodId, {headers});
  }

  removeItem(foodId){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url+'/'+'remove-item-cart/'+foodId, {headers});
  }
  
  checkout(){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url+'/'+'check-out', {headers});
  }
}
