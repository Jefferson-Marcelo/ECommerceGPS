import { Component, OnInit } from '@angular/core';

import {FormBuilder } from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";
import { Product } from 'app/shared/model/product';
import { ProductService } from 'app/shared/services/product.service';


@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {

  productAtual: Product;
  inserindo = true;
  nomeBotao = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private productService: ProductService,
              private roteador: Router, _formBuilder: FormBuilder) {
    this.productAtual = new Product('', '', '', 0, 0);
  }


  ngOnInit() {

  }

  inserirOuAtualizarProduct() {
    if (this.inserindo) {
      this.productService.inserirProduct(this.productAtual);

      this.productAtual = new Product('', '', '', 0, 0);
    } else {
      this.productService.atualizar(this.productAtual.id, this.productAtual);
    }
  }

  onFileSelected($event: Event) {

  }
}


