import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  formData 
  countries = ['egypt', 'plastine', 'canda', 'saudia', 'iraq', 'jordon']

  constructor() { }

  ngOnInit(): void {
  }

  submitMe(data){
    console.log(data.value)
    this.formData = data.value
  }

}
