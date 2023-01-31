import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/products.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

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
    this.productService.readProductById(id, "products").subscribe(product => {
      this.product = product;
    })
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product, "products").subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!")
      this.router.navigateByUrl("products")
    })
  }

  cancel(): void {
    this.router.navigateByUrl("products")
  }
}
