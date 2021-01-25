import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(private _user:UserService) { 
    this.getData()
  }

  ngOnInit(): void {
  }

  getData(){
    this._user.allData().subscribe(data=>{
      console.log(data)
    })
  }
}
