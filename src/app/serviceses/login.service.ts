import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.mode';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService : ApiService) { }

  URL = "auth/login";
  login(user : UserModel) {
    let url = `${this.URL}?email=${user.username}&password=${user.password}`
    return this.apiService.post(url, user);
  }
}
