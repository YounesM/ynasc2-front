import { Component, OnInit } from '@angular/core';
import {PreloaderService} from "../../services/preloader.service";

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  constructor(public preloaderSrv: PreloaderService) { }

  ngOnInit() {
  }

}
