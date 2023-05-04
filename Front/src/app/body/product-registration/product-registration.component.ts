import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/model/product";


import {FormBuilder } from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";

import {ActivatedRoute, Router} from "@angular/router";


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
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = (rotaAtual.snapshot.paramMap.get('id'));
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        let Encontrado = this.productService.pesquisarPorId(Number(idParaEdicao)).subscribe(
          productEncontrado => this.productAtual = productEncontrado
        );
        console.log(Encontrado)
      }
    }

  }


  ngOnInit() {

  }

  inserirOuAtualizarProduct() {
    if (this.inserindo) {
      this.productService.inserirProduct(this.productAtual).subscribe(
        productInserido => {
          console.log('Produto cadastrado com sucesso!')
          this.roteador.navigate([''])
        }
      );

      this.productAtual = new Product('', '', '', 0, 0);
    } else {
      this.productService.atualizar(this.productAtual).subscribe(
        productAtualizado => {
          console.log('Produto atualizado com sucesso!');
          this.roteador.navigate([''])
        }
      );
    }
  }

  onFileSelected($event: Event) {

  }
}


