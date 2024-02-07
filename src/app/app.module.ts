import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewAllMoviesComponent } from './view-all-movies/view-all-movies.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ImageComponent } from './image/image.component';
import { LargeImageComponent } from './large-image/large-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ViewAllMoviesComponent,
    ImageComponent,
    LargeImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
