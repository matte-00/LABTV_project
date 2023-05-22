import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MostPopularMoviesComponent } from './components/most-popular-movies/most-popular-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MoviesBoughtComponent } from './components/movies-bought/movies-bought.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MostPopularMoviesComponent,
    MovieDetailsComponent,
    SearchMoviesComponent,
    LoaderComponent,
    SliderComponent,
    LoginComponent,
    SignUpComponent,
    ContactsComponent,
    MoviesBoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
