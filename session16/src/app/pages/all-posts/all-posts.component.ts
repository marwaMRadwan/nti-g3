import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  allPosts : any =[]
  isLoaded : boolean = false
  errorMsg : string = ''
  constructor(private _posts:PostsService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
    this._posts.getAllPosts().subscribe(
      (data)=>{ this.allPosts = data},
      (error)=>{this.errorMsg = "error"},
      ()=>{this.isLoaded=true}
    )
  }
}
