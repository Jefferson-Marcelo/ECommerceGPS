import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  private productService: ProductService

  constructor(productService: ProductService) {
    this.productService = productService
  }

  ngOnInit(): void {
  }

  getTamanhoCarrinho() {
    return this.productService.getTamanhoCarrinho()
  }
}
