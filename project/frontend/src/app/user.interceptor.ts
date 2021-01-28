import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    console.log('ay 7aga')
    let token = localStorage.getItem('token')
    if(token){
      token = "Bearer "+token
      request = request.clone({
        headers:request.headers.set('Authorization', token)
      })
    }
    return next.handle(request);
  }
}
