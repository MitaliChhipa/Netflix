import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewAllMoviesComponent } from './view-all-movies/view-all-movies.component';
const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'viewAll',component:ViewAllMoviesComponent},
  {path:'**',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
