import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUrl, signUpUrl } from '../api/urls';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  login(user:User):Observable<any> {
    return this.http.post(loginUrl, user,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  signUp(user:User):Observable<any> {
    return this.http.post(signUpUrl, user,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

}
