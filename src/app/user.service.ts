import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private url = 'http://http://foodshalaaws-env.eba-ups6kvfu.us-east-2.elasticbeanstalk.com';

  getUser(){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url+'/'+'getUser', {headers});
  }
}
