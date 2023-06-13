import { Component } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../shared/model/product";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {

  service: ProductService
  carrinho: Product[]

  constructor(service : ProductService) {
    this.service = service
    this.carrinho = this.service.getProductsCarrinho()
  }

  getValorTotal() {
    return this.service.getValorTotalCarrinho()
  }

  removerProduct(id: string | undefined) {
    return this.service.removerDoCarrinho(id!)
  }

  carrinhoVazio() {
    return this.carrinho.length === 0
  }
}
