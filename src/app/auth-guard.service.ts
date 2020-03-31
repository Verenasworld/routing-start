import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';

import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
            } else {
            this.router.navigate(['/']);
          }
        }
      );
  }
}

