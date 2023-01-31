import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/model/products.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  products: Product = {
    name: "",
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.products, "products").subscribe(() =>{
      this.productService.showMessage('Produto criado com sucesso!')
      this.router.navigateByUrl("products")
    })
  }

  cancel(): void {
    this.router.navigateByUrl("products")
  }

}
