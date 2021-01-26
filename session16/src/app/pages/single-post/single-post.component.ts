import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  id:any
  id1:any
  post: any
  comments =[]
  isLoaded:boolean = false
  isCommentsLoaded :boolean = false
  constructor(
    private _route:ActivatedRoute,
    private _post:PostsService
    )
     { }

  ngOnInit(): void {
    // this.id = this._route.snapshot.paramMap.get('id')
    // this._route.paramMap.subscribe(params=>   
    //   this.id1 = params.get("id")
    // )
    this.getPostData()
    this.getPostComments()
  }

  getPostData(){
    this.id = this._route.snapshot.paramMap.get('id')
    this._post.getSinglePost(this.id).subscribe(
      data=>{
        this.post=data
      },
      (err)=>{},
      ()=>{this.isLoaded=true}
    )
  }
  getPostComments(){
    this.id = this._route.snapshot.paramMap.get('id')
    this._post.getPostComments(this.id).subscribe(
      data=>{
        this.comments=data
      },
      (err)=>{},
      ()=>{this.isCommentsLoaded=true}
    )
  }
}
