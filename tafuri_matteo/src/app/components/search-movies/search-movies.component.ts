import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MostPopularMovie } from 'src/app/models/MostPopularMovie';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent {

  @Input()
  mostPopularMovies:Array<MostPopularMovie> = [];

  isShownSearchedMovies:boolean = false;

  searchedMovies:Array<MostPopularMovie> = [];

  title:string = "";

  @Output()
  isShownMostPopularMoviesEventEmitter = new EventEmitter();

  constructor(private router:Router) { }

  searchMoviesByTitle(title:string) {
    this.title = title;

    this.isShownSearchedMovies = false;

    if (this.title !== "") {
      this.searchedMovies = this.mostPopularMovies.filter(
        (e) => { return e.original_title?.toLowerCase().includes(this.title.toLowerCase()); }
      );

      if (this.searchedMovies.length !== 0) {
        this.isShownMostPopularMovies(false);

        setTimeout( () => { this.isShownSearchedMovies = true; }, 230 );
      } else {
        setTimeout( () => { alert("Nessun risultato!"); }, 230 );

        setTimeout( () => { this.isShownMostPopularMovies(true); }, 240 );
      }
    } else {
      setTimeout( () => { this.isShownMostPopularMovies(true); }, 170 );
    }
  }

  private isShownMostPopularMovies(isShownMostPopularMovies:boolean) {
    this.isShownMostPopularMoviesEventEmitter.emit(isShownMostPopularMovies);
  }

  showMovieDetails(movie:MostPopularMovie) {
    this.router.navigate(["/movieDetails", movie.id]);
  }

}
