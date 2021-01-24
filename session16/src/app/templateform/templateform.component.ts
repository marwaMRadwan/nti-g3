import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  formData ={
    fname:"",
    lname:"",
    emails: "",
    gender: "", 
    phones: "", 
    country: "", 
    address: { 
      street: "", 
      buildingNo: "" 
    },
    type:1
  }
  countries = ['egypt', 'plastine', 'canda', 'saudia', 'iraq', 'jordon']

  constructor() { }

  ngOnInit(): void {
  }

  submitMe(register){
    if(register.valid){
console.log(this.formData)
    }
    else{
      console.log('error')
    }
  }

}
