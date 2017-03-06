import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const adminRoutes : Routes = [
  {
    path: 'admin',
    children : [
      { path: '', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }
