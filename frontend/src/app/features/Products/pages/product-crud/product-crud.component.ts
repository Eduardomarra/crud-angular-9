import { ProductService } from 'src/app/shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/model/products.model';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.readProduct("products").subscribe( product => {
      this.products = product
    })
  }

  navigateToProductCreate(): void {
    this.router.navigateByUrl('products/create')
  }

}
