import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseURL = `https://jsonplaceholder.typicode.com/posts`

  constructor(private _http:HttpClient) { }
  getAllPosts():Observable<any>{
    return this._http.get(this.baseURL)
  }
  getSinglePost(postId):Observable<any>{
    return this._http.get(`${this.baseURL}/${postId}`)
  }
  getPostComments(postId):Observable<any>{
    return this._http.get(`${this.baseURL}/${postId}/comments`)
  }
}
