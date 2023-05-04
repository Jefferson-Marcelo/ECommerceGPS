import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cifrao'
})
export class CifraoPipe implements PipeTransform {

  transform(value: number): string {
    return `R$ ${value}`;
  }

}
