import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ENV_URL = environment.api_url;

  post(URL: string, body: any) {
    return this.http.post(this.ENV_URL + URL, body);
  }

  get(URL: string) {
    return this.http.get(this.ENV_URL + URL);
  }
}
