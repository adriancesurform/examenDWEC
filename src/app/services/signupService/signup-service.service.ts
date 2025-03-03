import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = 'http://192.168.0.52:5000';


@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  constructor(private http: HttpClient) { }

  sendBody(username: string, email: string, password: string): Observable<any> {
    const body = {username: username, email: email, password: password };
    console.log(body);

    return this.http.post(`${baseUrl}/api/auth/register`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
