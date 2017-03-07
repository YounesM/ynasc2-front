import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../../services/auth-guard.service";
import { AdminComponent } from "./admin.component";
import { LoginService } from "../../services/login.service";

const adminRoutes : Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AuthGuardService ],
    children : [
      {
        path: '',
        canActivateChild: [ AuthGuardService ],
        children: [
          { path: '', component: DashboardComponent },
          { path: '', component: DashboardComponent }
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
  providers: [ AuthGuardService, LoginService]
})
export class AdminModule { }
