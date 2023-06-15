import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLogged: boolean = false;

  constructor(private authSvc: AuthService) {}

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
