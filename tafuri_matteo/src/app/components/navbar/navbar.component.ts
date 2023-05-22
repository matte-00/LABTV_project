import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  valueId:string = "";

  isShownHeader:boolean = true;

  constructor(private router:Router) { }

  ngOnInit():void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === "/login" || event.url === "/signUp") {
          this.isShownHeader = false;
        } else {
          this.isShownHeader = true;

          this.closeNavbar();
        }
      }
    });
  }

  openNavbar() {
    this.valueId = "open";
  }

  closeNavbar() {
    this.valueId = "";
  }

  showMoviesBought() {
    if (localStorage.getItem("userToken") !== null && localStorage.getItem("userId") !== null) {
      this.router.navigate(["/moviesBought"]);
    } else {
      alert("Effettuare il login per visualizzare gli acquisti!");
    }
  }

}
