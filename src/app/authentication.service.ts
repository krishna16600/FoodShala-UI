import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password){
    const headers = new HttpHeaders({Authorization: 'Basic '+ btoa(username+':'+password)});
    return this.http.get('http://localhost:2019/validateCustomerLogin', {headers}).pipe(
      map(data => {
        sessionStorage.setItem('username', username);
        const authString = 'Basic '+btoa(username+':'+password);
        sessionStorage.setItem('basicAuth', authString);
        console.log(data);
        return data;
      })
    )
  }

  isUserLoggedIn(){
    const user = sessionStorage.getItem('username');
    return !(user==null);
  }
  
  logout(){
    sessionStorage.removeItem('username');
   sessionStorage.removeItem('basicAuth');
  }
}
