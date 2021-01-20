import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  num =1
  flag = true
  data = ['img1','img2']
  fname:string = "abc"
  lname:string = "123"
  imgSRC ="assets/pic.png"
  user = {
    name:"marwa",
    age:36
  }  
c = 'blue'
  x = "<p>hello all</p>"

  constructor() { }

  ngOnInit(): void {
  }

  test():string{
    return "hello from playground logic"
  }
  average(num1,num2):number{
    return (num1+num2)/2
  }
  handelClick(){
    this.num++
  }
  handelClick2(){
    this.num--
  }
}
