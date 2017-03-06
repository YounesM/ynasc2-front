import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { routes } from "./app.routes";
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { RouterModule } from "@angular/router";
import { ThumbnailComponent } from './layouts/thumbnail/thumbnail.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { AboutFormComponent } from './layouts/about-form/about-form.component';
import { ArticleComponent } from './routes/article/article.component';
import { ArticleModule } from "./routes/article/article.module";
import { HttpInterceptorService } from "./services/http-interceptor.service";
import { SharedService } from "./services/shared.service";
import { PreloaderComponent } from './layouts/preloader/preloader.component';
import { PreloaderService } from "./services/preloader.service";
import { LoginComponent } from './routes/admin/login/login.component';
import { LoginFormComponent } from './layouts/login-form/login-form.component';
import { AdminComponent } from './routes/admin/admin.component';
import {AdminModule} from "./routes/admin/admin.module";

export function httpInterceptorFactory(backend: XHRBackend, defaultOptions: RequestOptions, preLoaderSrv: PreloaderService) {
  return new HttpInterceptorService(backend, defaultOptions, preLoaderSrv);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ThumbnailComponent,
    AsideComponent,
    AboutFormComponent,
    ArticleComponent,
    PreloaderComponent,
    LoginComponent,
    LoginFormComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ArticleModule,
    AdminModule
  ],
  providers: [
    {
      provide: HttpInterceptorService,
      useFactory: httpInterceptorFactory,
      deps: [XHRBackend, RequestOptions, PreloaderService]
    },
    PreloaderService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
