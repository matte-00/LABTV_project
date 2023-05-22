import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/models/Message';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(private contactsService:ContactsService){ }

  sendMessage(form:NgForm) {
    let message:Message = {
      name: form.value.name,
      surname: form.value.surname,
      email: form.value.email,
      telephone: form.value.telephone,
      message: form.value.message
    }

    this.contactsService.sendMessage(message).subscribe(
      {
        next: () => {
          alert(`Messaggio inviato!`);
        }
      }
    );
  }

}
