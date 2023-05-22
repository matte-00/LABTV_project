import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private usersService:UsersService, private router:Router){ }

  login(form:NgForm) {
    let user:User = {
      email: form.value.email,
      password: form.value.password
    }

    this.usersService.login(user).subscribe(
      {
        next: json => {
          localStorage.setItem("userToken", json.accessToken);
          localStorage.setItem("userId", json.user.id);

          alert(`BENVENUTO/A ${json.user.email}!`);

          this.router.navigate(["/home"]);
        },
        error: e => {
          if (e.error === "Cannot find user") {
            alert("Non sei registrato! Registrati");
          }

          if (e.error === "Incorrect password") {
            alert("La password è sbagliata!");
          }
        }
      }
    );
  }

}
