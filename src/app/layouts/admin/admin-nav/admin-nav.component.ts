import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  user: string;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('login')).login;
  }

}
