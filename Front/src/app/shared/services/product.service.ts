import { Injectable } from '@angular/core';
import {PRODUCTS} from "../model/PRODUCTS";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable, map, from} from "rxjs";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {List} from "postcss/lib/list";
import {Carrinho} from "../model/Carrinho";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private repoProducts: AngularFirestoreCollection<Product>;
  private readonly carrinho: Carrinho

  constructor(private db: AngularFirestore) {
    this.repoProducts = db.collection('products');
    this.carrinho = new Carrinho()
  }

  listar(): Observable<Product[]> {
    return this.repoProducts.valueChanges({idField: 'id'});
  }

  inserirProduct(product: Product): Observable<object> {
    delete product.id
    return from(this.repoProducts.add(Object.assign({}, product)))
  }

  excluirProduct(id?: string): Observable<void>{
    if(this.carrinho.possuiProduct(id!)) {
      this.removerDoCarrinho(id!)
    }
    return from(this.repoProducts.doc(id).delete())
  }

  pesquisarPorId(id: string): Observable<Product> {
    return this.repoProducts.doc(id).get().pipe(map(document =>
        new Product(document.data(), document.id)))
  }

  atualizar(product: Product): Observable<void> {
    if(this.carrinho.possuiProduct(product.id)) {
      this.carrinho.atualizar(product)
    }
    const id = product.id
    delete product.id
    return from (this.repoProducts.doc(id).update(Object.assign({}, product)))
  }

  adicionarAoCarrinho(product: Product) {
    this.carrinho.adicionarAoCarrinho(product)
  }

  removerDoCarrinho(id: string) {
    this.carrinho.removerDoCarrinho(id)
  }

  getProductsCarrinho(): Product[] {
    return this.carrinho.products
  }

  getTamanhoCarrinho() {
    return this.carrinho.getTamanho()
  }

  getValorTotalCarrinho() {
    return this.carrinho.getValorTotal()
  }

  estaNoCarrinho(product: Product) {
    return this.carrinho.possuiProduct(product.id!)
  }
}
