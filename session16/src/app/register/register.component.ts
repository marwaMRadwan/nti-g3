import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    name:"",
    age : "15",
    email:"",
    password:""
  }
  constructor() { }

  ngOnInit(): void {
  }

  handleRegister(){
console.log(this.user)
  }
}
