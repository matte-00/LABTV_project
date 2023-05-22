import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { messagesUrl } from '../api/urls';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  sendMessage(message:Message):Observable<any> {
    return this.http.post(messagesUrl, message,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

}
