import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../../services/auth-guard.service";
import { AdminComponent } from "./admin.component";
import { LoginService } from "../../services/login.service";
import {LastArticlesComponent} from "../../layouts/admin/dashboard/last-articles/last-articles.component";
import {SharedModule} from "../../shared/shared.module";

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
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [DashboardComponent, LastArticlesComponent],
  providers: [ AuthGuardService, LoginService]
})
export class AdminModule { }
