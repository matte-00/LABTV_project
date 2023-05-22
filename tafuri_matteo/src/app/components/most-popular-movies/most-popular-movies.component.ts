import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MostPopularMovie } from 'src/app/models/MostPopularMovie';
import { MovieBought } from 'src/app/models/MovieBought';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-most-popular-movies',
  templateUrl: './most-popular-movies.component.html',
  styleUrls: ['./most-popular-movies.component.css']
})
export class MostPopularMoviesComponent {

  isShownMostPopularMovies:boolean = false;

  private pageNumber:number = 1;

  mostPopularMovies:Array<MostPopularMovie> = [];

  isShownInfiniteScrollLoader:boolean = false;

  isShownBuyMovie = false;

  constructor(private moviesService:MoviesService, private router:Router) { }

  ngOnInit():void {
    /*
      Dato che il numero totale dei film popolari è molto grande la documentazione dell'API mette al corrente l'utente che deve utilizzare
      obbligatoriamente il query parameter page per visualizzare la lista dei film più popolari corrispondente alla pagina desiderata.

        ESEMPIO:
          https://api.themoviedb.org/3/movie/popular?api_key=ea278a76dc83b9f2dbfd65b54085eb13&language=en-US&page=1

      N.B.: Il valore del query parameter page viene passato come parametro al metodo getMostPopularMovies del servizio moviesService.
    */
    this.moviesService.getMostPopularMovies(this.pageNumber).subscribe(
      {
        next: json => {
          this.mostPopularMovies = json.results;

          this.isShownMostPopularMovies = true;
        }
      }
    );

    if (localStorage.getItem("userToken") !== null) {
      this.isShownBuyMovie = true;
    }
  }

  /* Ogni qualvolta la scrollbarr arriva al 90% della pagina web viene incrementato il numero di pagina per visualizzare la lista dei film più
  popolari corrispondente al nuovo valore della pagina. */
  infiniteScroll() {
    this.isShownInfiniteScrollLoader = true;

    this.moviesService.getMostPopularMovies(++this.pageNumber).subscribe(
      {
        next: json => {
          setTimeout( () => { this.isShownInfiniteScrollLoader = false; }, 1500 );

          setTimeout( () => { this.mostPopularMovies = [...this.mostPopularMovies, ...json.results]; }, 1600 );
        }
      }
    );
  }

  isSeenMostPopularMovies(isSeenMostPopularMovies:boolean) {
    this.isShownMostPopularMovies = isSeenMostPopularMovies;
  }

  showMovieDetails(movie:MostPopularMovie) {
    this.router.navigate(["/movieDetails", movie.id]);
  }

  buyMovie(movie:MostPopularMovie) {
    let movieBought:MovieBought = {
      userId: localStorage.getItem("userId"),
      original_title: movie.original_title,
      poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
      release_date: movie.release_date
    }

    this.moviesService.buyMovie(movieBought).subscribe(
      {
        next: json => {
          alert(`Hai acquistato il film ${json.original_title}!`);
        }
      }
    );
  }

}
