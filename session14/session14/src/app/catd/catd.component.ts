import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catd',
  templateUrl: './catd.component.html',
  styleUrls: ['./catd.component.css']
})
export class CatdComponent implements OnInit {

  data = [
    {name:'a 1', imgUrl:"assets/1.jpg", content:' content 1'},
    {name:'a 2', imgUrl:"assets/2.jpg", content:' content 2'},
    {name:'a 3', imgUrl:"assets/3.png", content:' content 3'},
    {name:'a 4', imgUrl:"assets/4.png", content:' content 4'},
    {name:'a 5', imgUrl:"assets/5.png", content:' content 5'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
