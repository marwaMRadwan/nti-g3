import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  register(userData):Observable<any>{
    return this._http.post(`localhost:3000/user/add`,userData)
  }
  login(){

  }
  logout(){
    
  }
}
