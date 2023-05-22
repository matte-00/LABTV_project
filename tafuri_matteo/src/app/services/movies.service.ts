import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { buyMovieUrl, firstPartUrl, moviesBoughtByUserUrl, queryParameters } from '../api/urls';
import { MovieBought } from '../models/MovieBought';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMostPopularMovies(pageNumber:number):Observable<any> {
    return this.http.get(`${firstPartUrl}popular${queryParameters}`,
      {
        params: {
          "page": pageNumber
        }
      }
    );
  }

  getMovieDetails(id:number):Observable<any> {
    return this.http.get(`${firstPartUrl}${id}${queryParameters}`);
  }

  getMovieCredits(id:number):Observable<any> {
    return this.http.get(`${firstPartUrl}${id}/credits${queryParameters}`);
  }

  getMovieVideos(id:number):Observable<any> {
    return this.http.get(`${firstPartUrl}${id}/videos${queryParameters}`);
  }

  buyMovie(movie:MovieBought):Observable<any> {
    return this.http.post(buyMovieUrl, movie,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
      }
    );
  }

  getMoviesBoughtByUser():Observable<any> {
    return this.http.get(`${moviesBoughtByUserUrl}${localStorage.getItem("userId")}`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("userToken")}`
        }
      }
    );
  }

}
