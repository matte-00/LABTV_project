import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieBought } from 'src/app/models/MovieBought';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-bought',
  templateUrl: './movies-bought.component.html',
  styleUrls: ['./movies-bought.component.css']
})
export class MoviesBoughtComponent {

  moviesBoughtByUser:Array<MovieBought> = [];

  constructor(private moviesService:MoviesService, private router:Router) { }

  ngOnInit():void {
    if (localStorage.getItem("userToken") !== null && localStorage.getItem("userId") !== null) {
      this.router.navigate(["/moviesBought"]);
    } else {
      this.router.navigate(["/home"]);
    }

    this.moviesService.getMoviesBoughtByUser().subscribe(
      {
        next: json => {
          if (json.length !== 0) {
            this.moviesBoughtByUser = json;
          } else {
            alert("Non sono stati ancora acquistati film!");

            this.router.navigate(["/home"]);
          }
        }
      }
    );
  }

}
