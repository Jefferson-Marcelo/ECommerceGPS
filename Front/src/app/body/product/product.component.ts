import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { Product } from 'app/shared/model/product';
import { ProductService } from 'app/shared/services/product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private roteador: Router, private productService: ProductService) {
    this.products = this.productService.listar();
  }

  ngOnInit(): void {

  }

  editarProduct(product: Product): void{
    this.roteador.navigate(['cadastrarproduto', product.id]);
}


  removerProduct(productARemover: Product): void {
    this.productService.excluirProduct(productARemover.id);
  }

  adicionarAoCarrinho(product: Product): void {
    this.productService.adicionarAoCarrinho(product)
  }

  estaNoCarrinho(product: Product) {
    return this.productService.estaNoCarrinho(product);
  }
}
