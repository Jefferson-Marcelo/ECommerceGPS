import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParcelaPipe} from "./parcela.pipe";
import { CifraoPipe } from './cifrao.pipe';



@NgModule({
  declarations: [ParcelaPipe, CifraoPipe],
  imports: [
    CommonModule
  ],
  exports: [ParcelaPipe, CifraoPipe]
})
export class PipesModule { }
