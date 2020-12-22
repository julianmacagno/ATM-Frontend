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
        if(result !== null && result.hasOwnProperty("token") && Object(result).token !== "") {
          console.log(Object(result).token);
          localStorage.setItem("token", Object(result).token);
          this.router.navigate(['/atm']);
        } else {
          alert("The information you have entered is wrong");
        }
      }, error => {
        console.log(error);
        alert("An error has ocurred");
      }
    );
  }

}
