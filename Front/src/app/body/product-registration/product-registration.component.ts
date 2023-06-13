import { Component, OnInit } from '@angular/core';

import {FormBuilder } from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";
import { Product } from 'app/shared/model/product';
import { ProductService } from 'app/shared/services/product.service';
import {Observable} from "rxjs";


@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {

  productAtual: Product;
  inserindo : Boolean;
  nomeBotao = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private productService: ProductService,
              private roteador: Router, _formBuilder: FormBuilder) {

    this.productAtual = new Product({imagem: '', nome: '', valor: 0, parcelado: 0}, '');
    this.inserindo = true;
    this.rotaAtual.paramMap.subscribe(params => {
      this.setProductAtual(params.get('id'))
    })
  }

  private setProductAtual(id: string | null) {
    if(id) {
      this.productService.pesquisarPorId(id).subscribe(foundProduct => this.productAtual = foundProduct)
      this.productAtual.id = id
      this.inserindo = false
    }
  }


  ngOnInit() {

  }

  inserirOuAtualizarProduct() {
    if (this.inserindo) {
      this.productService.inserirProduct(this.productAtual);
      this.productAtual = new Product({imagem: '', nome: '', valor: 0, parcelado: 0}, '');
    } else {
      this.productService.atualizar(this.productAtual);
    }
    this.roteador.navigate(['']);
  }

  onFileSelected($event: Event) {

  }
}


