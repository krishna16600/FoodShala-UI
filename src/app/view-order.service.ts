import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewOrderService {

  constructor(private http: HttpClient) { }
  private url = 'http://foodshalaaws-env.eba-ups6kvfu.us-east-2.elasticbeanstalk.com';

  viewOrder(){
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url+'/'+'view-orders', {headers});
  }
}
