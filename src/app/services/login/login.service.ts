import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/GlobalConstants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    let url: string = GlobalConstants.apiURL + "login?username=" + username + "&password=" + password;
    return this.http.post(url, {});
  } 
}
