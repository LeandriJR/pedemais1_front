import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../shared/types/login-response.type';
import { tap } from 'rxjs';
import { environment } from '../../../envirioments/envirioments.prod';
import { TokenService } from './token.service';
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {  }

  login(username: string, password: string){
    return this.httpClient.post<LoginResponse>(environment['API_BACKEND'] + 'core/usuario/funcionario/login', {username, password}).pipe(
      tap((value) => {
        if(value.status){
          console.log(value.data);
          this.tokenService.setToken(value.data?.token)
        }
      })
    )
  }
}
