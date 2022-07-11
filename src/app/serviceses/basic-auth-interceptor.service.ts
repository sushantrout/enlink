import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthInterceptorService {
  constructor(private authenticationService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add header with basic auth credentials if user is logged in and request is to the api url
    const token = this.authenticationService.getToken();
    if (token && request.url && !request.url.includes('login/auth')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
