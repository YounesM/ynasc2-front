import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';

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
import {HttpInterceptorService} from "./services/http-interceptor.service";
import {LoaderService} from "./services/loader.service";

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
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ArticleModule
  ],
  providers: [
    {
      provide: HttpInterceptorService,
      useFactory: (backend: XHRBackend, options: RequestOptions, loader: LoaderService) => {
        return new HttpInterceptorService(backend, options, loader);
        },
      deps: [XHRBackend, RequestOptions, LoaderService]
    },
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
