import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css']
})
export class AboutFormComponent implements OnInit {
  title: string;
  email: string;
  content: string;

  constructor()  { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Sent"+ this.title);
  }

}
