import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from '../model/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001"

  constructor(
    private snackBar: MatSnackBar,
    private httpClient: HttpClient
  ) { }

  showMessage( msg: string ): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create( product: Product, page: string ): Observable<Product> {
    return this.httpClient.post<Product>(`${this.baseUrl}/${page}`, product)
  }

  readProduct(page: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/${page}`)
  }
}
