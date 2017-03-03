import {Routes, RouterModule} from "@angular/router";
import {ArticleComponent} from "./article.component";
import {NgModule} from "@angular/core";

const articleRoutes: Routes = [
  { path:'article', component: ArticleComponent },
  { path:'article/:id/:title', component : ArticleComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ArticleModule { }
