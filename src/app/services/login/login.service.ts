import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let url: string = "http://localhost:8080/login?username=" + username + "&password=" + password;
    return this.http.post(url, {});
  } 
}
