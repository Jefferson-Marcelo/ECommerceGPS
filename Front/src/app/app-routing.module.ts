import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductRegistrationComponent} from "./body/product-registration/product-registration.component";
import {ProductComponent} from "./body/product/product.component";
import {ShowBodyComponent} from "./body/show-body/show-body.component";
import {UserComponent} from "./user/user.component";
import {CarrinhoComponent} from "./body/carrinho/carrinho.component";

const routes: Routes = [
  {
    path: '',
    component: ShowBodyComponent
  },
  {
    path: 'cadastrarproduto',
    component: ProductRegistrationComponent
  },
  {
    path: 'cadastrarproduto/:id',
    component: ProductRegistrationComponent
  },
  {
    path: 'listarproduto',
    component: ProductComponent
  },
  {
    path: 'listarproduto/:id',
    component: ProductComponent
  },
  {
    path: 'usuario',
    component: UserComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
