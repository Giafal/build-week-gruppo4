import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLogged: boolean = false;

  constructor(public authSvc: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn();
  }

  logout() {
    this.authSvc.logout();
  }

  isLoggedIn() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.isLogged = true;
    }
  }
}
