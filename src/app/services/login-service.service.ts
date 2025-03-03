import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = 'http://192.168.0.52:5000';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor(private http: HttpClient) { }

  sendBody(username: string, password: string): Observable<any> {
    const body = { username: username  , password: password };
    console.log(body);

    return this.http.post(`${baseUrl}/api/auth/login`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  sendToken(token: string): Observable<any> {
    console.log("Token en solicitud:", token.toString());
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get(`${baseUrl}/api/entrades`, {headers: headers});
  }

  sendEntrada(eventName: string): Observable<any> {
    const body = {eventName: eventName};

    return this.http.post(`${baseUrl}/api/entrades/comprar`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }


}
