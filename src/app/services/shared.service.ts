import { Injectable } from '@angular/core';
import {Article} from "../model/article";

@Injectable()
export class SharedService {
  private _clickedArticle : number;

  constructor() { }


  getClickedArticle(): number {
    return this._clickedArticle;
  }

  setClickedArticle(value: number) {
    this._clickedArticle = value;
  }
}
