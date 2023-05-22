import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieCast } from 'src/app/models/MovieCast';
import { MovieCrew } from 'src/app/models/MovieCrew';
import { MovieDetails } from 'src/app/models/MovieDetails';
import { MovieVideo } from 'src/app/models/MovieVideo';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movieDetails:MovieDetails = {};

  movieCrew:Array<MovieCrew> = [];

  movieCast:Array<MovieCast> = [];

  isShownMovieDetailsLoader:boolean = true;

  isShownMovieDetails:boolean = false;

  movieTrailerUrl:SafeResourceUrl = "";

  constructor(private moviesService:MoviesService, private activatedRoute:ActivatedRoute, private domSanitizer: DomSanitizer) { }

  ngOnInit():void {
    let movieId:number = this.activatedRoute.snapshot.params['id']

    // Immagine di copertina, titolo del film, generi e trama
    this.moviesService.getMovieDetails(movieId).subscribe(
      {
        next: json => {
          this.movieDetails = json;
        }
      }
    );

    // Registi e cast
    this.moviesService.getMovieCredits(movieId).subscribe(
      {
        next: json => {
          this.getMovieDirectors(json.crew);

          this.movieCast = json.cast;
        }
      }
    );

    this.moviesService.getMovieVideos(movieId).subscribe(
      {
        next: json => {
          this.getMovieTrailer(json.results);
        }
      }
    );

    setTimeout( () => { this.isShownMovieDetailsLoader = false; }, 1500 );

    setTimeout( () => { this.isShownMovieDetails = true; }, 1600 );
  }

  private getMovieDirectors(movieDirectors:Array<MovieCrew>) {
    for (let i:number = 0; i < movieDirectors.length; i++) {
      if (movieDirectors[i].job === "Director") {
        this.movieCrew.push(movieDirectors[i]);
      }
    }
  }

  private getMovieTrailer(movieVideos:Array<MovieVideo>) {
    for (const e of movieVideos) {
      if (e.type === "Trailer") {
        this.movieTrailerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${e.key}?autoplay=1`);

        break;
      }
    }
  }

}
