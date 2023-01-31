import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

  showMessage( msg: string, isError: boolean = false ): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass:isError ? ['msg-error'] : ['msg-success']
    })
  }

  create( product: Product, page: string ): Observable<Product> {
    return this.httpClient.post<Product>(`${this.baseUrl}/${page}`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  errorHandle(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }


  readProduct(page: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/${page}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  readProductById(id: string, page: string): Observable<Product> {
    const url = `${this.baseUrl}/${page}/${id}`
    return this.httpClient.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  updateProduct( product: Product, page: string): Observable<Product> {
    const url = `${this.baseUrl}/${page}/${product.id}`
    return this.httpClient.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }

  deleteProduct(id: number, page: string): Observable<Product> {
    const url = `${this.baseUrl}/${page}/${id}`
    return this.httpClient.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandle(e))
    )
  }
}
