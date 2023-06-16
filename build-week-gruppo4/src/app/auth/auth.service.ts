import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { AccesData } from '../interfaces/acces-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginData } from '../interfaces/login-data';
import { RegisterData } from '../interfaces/register-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  apiUrl: string = 'http://localhost:3000';

  private authSubject = new BehaviorSubject<null | AccesData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((dato) => Boolean(dato)));

  authLogoutTimer: any;

  isLogged: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }

  login(data: LoginData) {
    this.isLogged = true;
    return this.http.post<AccesData>(this.apiUrl + '/' + 'login', data).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('user', JSON.stringify(data));

        const expDate = this.jwtHelper.getTokenExpirationDate(
          data.accessToken
        ) as Date;
        // this.autoLogout(expDate);
      })
      // catchError(this.errors)
    );
  }

  // errors(err: any) {
  //   switch (err.error) {
  //     case 'Email and Password are required':
  //       return throwError('Email e password obbligatorie');
  //       break;
  //     case 'Email already exists':
  //       return throwError('Utente esistente');
  //       break;
  //     case 'Email format is invalid':
  //       return throwError('Email scritta male');
  //       break;
  //     case 'Cannot find user':
  //       return throwError('utente inesistente');
  //       break;
  //     default:
  //       return throwError('Errore');
  //       break;
  //   }
  // }

  restoreUser() {
    const userJson = localStorage.getItem('user');

    if (!userJson) {
      return;
    }
    const user: AccesData = JSON.parse(userJson);

    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      return;
    }

    this.isLogged = true;

    this.authSubject.next(user);
  }

  signUp(data: RegisterData) {
    return this.http.post<AccesData>(this.apiUrl + '/' + 'register', data);
    // .pipe(catchError(this.errors));
  }

  logout() {
    this.isLogged = false;
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
    if (this.authLogoutTimer) {
      clearTimeout(this.authLogoutTimer);
    }
  }

  /*autoLogout(expDate: Date) {
    const expMs = expDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(() => {
      this.logout();
    }, expMs);
  }*/
}
