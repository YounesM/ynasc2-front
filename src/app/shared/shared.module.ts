import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from "../layouts/preloader/preloader.component";
import {GlobalMessageComponent} from "../layouts/admin/dashboard/global-message/global-message.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PreloaderComponent,
    GlobalMessageComponent
  ],
  exports: [
    PreloaderComponent,
    GlobalMessageComponent
  ]
})
export class SharedModule { }
