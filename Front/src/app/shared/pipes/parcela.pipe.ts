import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parcela'
})
export class ParcelaPipe implements PipeTransform {

  transform(parcela: number, preco: number): string {
    let divisao = (preco/parcela).toFixed(2).replace('.',',')
    return ` x de ${divisao}`;
  }

}
