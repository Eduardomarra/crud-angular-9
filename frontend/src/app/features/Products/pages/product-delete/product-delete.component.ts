import { ProductService } from './../../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/products.model';
import { ActionSequence } from 'protractor';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readProductById(id, "products").subscribe((product)=> {
      this.product = product
    })
  }


  deleteProduct() {
    this.productService.deleteProduct(this.product.id, "products").subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!")
      this.router.navigateByUrl("products")
    });
  }


  cancel(): void {
    this.router.navigateByUrl("products")
  }

}
