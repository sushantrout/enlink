import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private apiService : ApiService) { }

  URL = "v1/rmu";

  get() {
    return this.apiService.get(this.URL);
  }
}
