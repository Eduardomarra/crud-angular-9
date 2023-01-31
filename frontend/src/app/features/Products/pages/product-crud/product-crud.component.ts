import { ProductService } from 'src/app/shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/model/products.model';
import { HeaderService } from 'src/app/shared/services/header.service';

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
    private productService: ProductService,
    private headerService: HeaderService
  ) {

    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "storefront",
      routeUrl: "/products"
    }
  }

  ngOnInit(): void {
    this.productService.readProduct("products").subscribe( product => {
      this.products = product
    })
  }

  navigateToProductCreate(): void {
    this.router.navigateByUrl('products/create')
  }

  delete(idProduct: number) {
    this.productService.deleteProduct(idProduct, "products").subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!")
    });
  }

}
