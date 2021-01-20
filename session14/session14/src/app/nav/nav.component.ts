import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchKey =""
  varName = "marwa"
  constructor() { }

  ngOnInit(): void {
  }
  handelSearch(data){
    console.log(data.target.value)
    this.searchKey = data.target.value
  }

}
