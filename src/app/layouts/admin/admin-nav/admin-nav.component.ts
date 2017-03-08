import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css'],
  providers: [ LoginService ]
})
export class AdminNavComponent implements OnInit {
  user: string;

  constructor(private loginSrv: LoginService) { }

  ngOnInit() {
    JSON.parse(localStorage.getItem('login')) ? this.user = JSON.parse(localStorage.getItem('login')).login : 0;
  }

  logout(){
    this.loginSrv.logout();
  }

}
