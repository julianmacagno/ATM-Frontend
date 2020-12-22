import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = "";
  password = "";
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  login() : void {
    this.loginService.login(this.username, this.password).subscribe(
      result => {
        if(result.hasOwnProperty("token") && Object(result).token !== "") {
          console.log(Object(result).token);
          localStorage.setItem("token", Object(result).token);
          this.router.navigate(['/atm']);
        }
      }, error => {
        console.log(error);
      }
    );
  }

}
