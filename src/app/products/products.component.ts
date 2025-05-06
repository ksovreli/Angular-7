import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(
    private api : ApiService 
  ) {

  }

  ngOnInit(){
    this.api.getProducts().subscribe((resp : any) => {
      console.log(resp)
      this.productsArr = resp
    })
  }
  

  productsArr: Product[] = []
}


