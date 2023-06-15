import { Component } from '@angular/core';
import { LoginData } from 'src/app/interfaces/login-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  data: LoginData = {
    email: '',
    password: '',
  };

  isLogged: boolean = false;

  constructor(private authSvc: AuthService, private router: Router) {}

  login() {
    console.log(this.data);
    this.authSvc.login(this.data).subscribe((accessData) => {
      alert(`Sei loggato come ${accessData.user.name}`);
      this.router.navigate(['/crud']);
      this.isLoggedIn();
    });
  }

  isLoggedIn() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.isLogged = true;
    }
  }
}
