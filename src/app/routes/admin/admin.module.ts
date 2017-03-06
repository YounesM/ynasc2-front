import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "../../services/auth-guard.service";
import {AdminComponent} from "./admin.component";

const adminRoutes : Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AuthGuardService ],
    children : [
      {
        path: '',
        children: [
          { path: '', component: LoginComponent},
          { path: 'dashboard', component: DashboardComponent }
        ]
      }
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
  declarations: [DashboardComponent],
  providers: [AuthGuardService]
})
export class AdminModule { }
