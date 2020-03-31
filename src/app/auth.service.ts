import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.logggedIn);
        }, 800);
      }
    );
  }

  login() {
    this.logggedIn = true;
  }

  logOut() {
    this.logggedIn = false;
  }
}
