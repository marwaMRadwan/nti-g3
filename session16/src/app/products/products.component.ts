import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = []
  isloaded = false
  constructor(private _user: UserService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this._user.apiData().subscribe(
      data =>{
        this.products = data.result.product_data
      },
      error=>{
        console.log(error)
      },
      ()=>{
        console.log('done')
        this.isloaded=true
      }
    )
  }
}
