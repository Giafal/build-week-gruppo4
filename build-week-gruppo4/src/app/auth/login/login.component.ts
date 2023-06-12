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

  constructor(private authSvc: AuthService, private router: Router) {}

  login() {
    this.authSvc.login(this.data).subscribe((accessData) => {
      alert(`Sei loggato come ${accessData.user.name}`);
      // this.router.navigate(['/dashboard']);
    });
  }
}
