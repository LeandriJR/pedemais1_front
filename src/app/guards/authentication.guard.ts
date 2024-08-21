import { Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TokenService } from '../core/services/token.service';
import { environment } from '../../envirioments/envirioments.prod';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard {
  private tokenService = inject(TokenService);
  private router = inject(Router);

  readonly API_BACK: string = environment['API_BACKEND'];

  constructor() {}

  private verificacaoLogin(): Observable<boolean> {
    const accessToken = this.tokenService.getJwtDecodedAccess();
    const date = new Date().getTime() / 1000;

    if (accessToken) {
      if (accessToken.exp < date) {
        this.tokenService.clearToken();
        this.router.navigate(['/login']); // Redirect to login page
        return of(false);
      }
      return of(true);
    } else {
      this.tokenService.clearToken();
      this.router.navigate(['/login']); // Redirect to login page
      return of(false);
    }
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificacaoLogin();
  }

  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificacaoLogin();
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificacaoLogin();
  }
}
