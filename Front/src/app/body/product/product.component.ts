import { Component, OnInit } from '@angular/core';

import {Product} from "../../shared/model/product";
import {ProductService} from "../../shared/services/product.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];


  constructor(private roteador: Router, private productService: ProductService) {
    this.products = new Array<Product>()
  }

  ngOnInit(): void {
    this.productService.listar().subscribe(
      products => this.products = products
    );
  }

  editarProduct(product: Product): void{
    this.roteador.navigate(['cadastrarproduto', product.id]);
}


  removerProduct(productARemover: Product): void {
    this.productService.excluirProduct(productARemover.id).subscribe(
      removido => {
        console.log(removido);
        const indxUsuario = this.products.findIndex(p => p.id === productARemover.id);

        if (indxUsuario > -1) {
          this.products.splice(indxUsuario, 1);
        }

      }
    );
  }

}
