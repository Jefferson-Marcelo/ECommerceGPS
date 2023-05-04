import { Injectable } from '@angular/core';
import {PRODUCTS} from "../model/PRODUCTS";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL_PRODUCTS = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) {
  }

  listar():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.URL_PRODUCTS}/listarproduto`);
  }

  inserirProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(`${this.URL_PRODUCTS}/cadastrarproduto`, product);
  }

  excluirProduct(id: string): Observable<object>{
    return this.httpClient.delete(`${this.URL_PRODUCTS}/${id}`)
  }

  pesquisarPorId(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.URL_PRODUCTS}/listarproduto/${id}`);
  }

  atualizar(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.URL_PRODUCTS}/cadastrarproduto/${product.id}`, product);
  }

}
