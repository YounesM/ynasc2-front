import { Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {
  public static loadingCount : number = 0;

  constructor() { }

  getCount() : number{
    return PreloaderService.loadingCount;
  }

  showPreloader() {
    PreloaderService.loadingCount++;
  }

  hidePreloader() {
    PreloaderService.loadingCount--;
  }

}
