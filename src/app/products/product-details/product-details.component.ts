import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  constructor(private router : ActivatedRoute, private api : ApiService){
    this.router.params.subscribe(data => {
      console.log(data['id'])
      this.singleProductId = data['id']
    })
  }

  singleProductId = 0
  singleProduct? : any

  ngOnInit(){
    this.api.getProductById(this.singleProductId).subscribe(resp => {
      console.log(resp)
      this.singleProduct = resp
    })
  }

  productsArr: Product[] = []

}
