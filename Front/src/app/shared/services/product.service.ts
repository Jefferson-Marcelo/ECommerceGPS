import { Injectable } from '@angular/core';
import {PRODUCTS} from "../model/PRODUCTS";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private itemsRef: AngularFireList<Product>;
  items$: Observable<Product[]>;

  constructor(private db: AngularFireDatabase) {
    this.itemsRef = this.db.list<Product>('products');
    this.items$ = this.itemsRef.valueChanges();
  }

  listar(): Observable<Product[]> {
    return this.items$;
  }

  inserirProduct(product: Product): void {
    this.itemsRef.push(product);
  }

  excluirProduct(id: string): void{
    this.itemsRef.remove(id)
  }

  // pesquisarPorId(id: number): Observable<Product> {
  //   return this.httpClient.get<Product>(`${this.URL_PRODUCTS}/listarproduto/${id}`);
  // }

  atualizar(id: string, product: Product): Promise<void> {
    return this.itemsRef.update(id, product);
  }

}
