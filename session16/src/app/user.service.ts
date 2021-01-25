import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL:string = 'http://localhost:3000/'
  constructor(private _http: HttpClient) { }

  register(userData):Observable<any>{
    return this._http.post(`${this.baseURL}user/add`,userData)
  }
  allData():Observable<any>{
    return this._http.get(`${this.baseURL}user/showAll`)
  }
  apiData():Observable<any>{
    return this._http.get(`https://backtest.achilleseg.com/api/ProductsUpdated?lang_id=1&page=0&limit=12`)
  }
  login(){

  }
  logout(){
    
  }
}
