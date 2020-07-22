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
    return this.http.get('http://foodshalaaws-env.eba-ups6kvfu.us-east-2.elasticbeanstalk.com/validateCustomerLogin', {headers}).pipe(
      map(data => {
        sessionStorage.setItem('username', username);
        const authString = 'Basic '+btoa(username+':'+password);
        sessionStorage.setItem('basicAuth', authString);
        return data;
      })
    )
  }
  authenticateRestaurant(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get('http://foodshalaaws-env.eba-ups6kvfu.us-east-2.elasticbeanstalk.com/validateRestaurantLogin', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicAuth', authString);
          sessionStorage.setItem('role', 'restaurant');
          return userData;
        }
      )
    );
    
  }

  isUserLoggedIn(){
    const user = sessionStorage.getItem('username');    
    return !(user==null);
  }
  
  logout(){
    sessionStorage.removeItem('username');
   sessionStorage.removeItem('basicAuth');
   sessionStorage.removeItem('role');
  }
}
