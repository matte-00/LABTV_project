import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private usersService:UsersService, private router:Router){ }

  signUp(form:NgForm) {
    let user:User = {
      email: form.value.email,
      password: form.value.password
    }

    this.usersService.signUp(user).subscribe(
      {
        next: json => {
          localStorage.setItem("userToken", json.accessToken);
          localStorage.setItem("userId", json.user.id);

          alert(`BENVENUTO/A ${json.user.email}!`);

          this.router.navigate(["/home"]);
        },
        error: e => {
          if (e.error === "Email already exists") {
            alert("E' già presente un account!");
          }
        }
      }
    );
  }

}
