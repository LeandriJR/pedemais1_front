import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token:any){
    this.clearToken();
    localStorage.setItem('token', JSON.stringify(token))
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('token')!);
  }

  clearToken(): void {
    localStorage.clear();
  }

  getJwtDecodedAccess(): any {
    try {
      return jwtDecode(this.getToken());
    } catch (error) {
      //
    }
  }
}
