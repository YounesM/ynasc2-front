import {HomeComponent} from "./routes/home/home.component";
import {AboutComponent} from "./routes/about/about.component";
import {NotFoundComponent} from "./routes/not-found/not-found.component";

export const routes = [
  //Non-lazy routes
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];
