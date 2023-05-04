import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";
import {Product} from "../model/product";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup} from "@angular/fire/compat/firestore";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductFirestoreService {

colecaoProducts: AngularFirestoreCollection<Product>;
NOME_COLECAO = 'products';

  constructor(private afs: AngularFirestore) {
    this.colecaoProducts = afs.collection(this.NOME_COLECAO);
  }

listar(): Observable<Product[]>{
    return this.colecaoProducts.valueChanges({idField: 'id'});
}

inserir(product: Product): Observable<object>{
    // @ts-ignore
  delete product.id;
    return from(this.colecaoProducts.add(Object.assign({}, product)));
}

remover(id:string): Observable<void> {
    return from(this.colecaoProducts.doc(id).delete());
}


pesquisarPorId(id: string): Observable<Product>{
    // @ts-ignore
  return this.colecaoProducts.doc(id).get().pipe(map(document => new Product(document.id, document.data())));
}


atualizar(product: Product): Observable<void>{
  // @ts-ignore
  delete product.id;
  return  from(this.colecaoProducts.doc(product.id).update(Object.assign({}, product)))
}

carregarImagem(product: Product): Observable<object>{
    // @ts-ignore
    delete product.id;
    return from(this.colecaoProducts.add(Object.assign({}, product)));
  }

}
