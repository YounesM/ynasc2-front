import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [LoginService]
})
export class LoginFormComponent implements OnInit {
  login: string;
  password: string;
  message: string;

  constructor(private router: Router, private loginSrv: LoginService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginSrv.login(this.login, this.password).subscribe(
      res => {
        if (res.token){
          localStorage.setItem('login', JSON.stringify(res));
          this.router.navigate(['admin']);
        } else {
          this.message = 'Wrong login or password'
        }
      },
      err => {
        console.log(err);
        this.message = 'An unexpected error has occurred';
      }
    )
  }
}
