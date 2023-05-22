import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostPopularMoviesComponent } from './components/most-popular-movies/most-popular-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MoviesBoughtComponent } from './components/movies-bought/movies-bought.component';

const routes: Routes = [
  {
    path: "",
    component: MostPopularMoviesComponent
  },
  {
    path: "home",
    component: MostPopularMoviesComponent
  },
  {
    path: "movieDetails/:id",
    component: MovieDetailsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signUp",
    component: SignUpComponent
  },
  {
    path: "contacts",
    component: ContactsComponent
  },
  {
    path: "moviesBought",
    component: MoviesBoughtComponent
  },
  {
    path: "**",
    component: MostPopularMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
