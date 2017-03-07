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
          { path: 'stats', component: DashboardComponent },
          {
            path: 'users',
            children : [
              { path: 'new', component: DashboardComponent },
              { path: 'manage', component: DashboardComponent },
              { path: 'manage/:id', component: DashboardComponent }
            ]
          },
          {
            path: 'posts',
            children: [
              { path: 'new', component: DashboardComponent },
              { path: 'manage', component: DashboardComponent },
              { path: 'manage/:id', component: DashboardComponent }
            ]
          }
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
