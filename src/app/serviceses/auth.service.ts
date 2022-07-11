import { Injectable } from '@angular/core';
import { AuthData } from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authDetails !: any;

  public setAuthData(authDetails : AuthData) {
    this.authDetails = JSON.parse(JSON.stringify(authDetails));
  }

  public getToken() : string {
    return this.authDetails?.token;
  }
}
