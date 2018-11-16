import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Sumar'
})
export class SumarDatos implements PipeTransform {
  transform(value: number, exponent: number): number {
    let exp = exponent;
    return  (value + exponent);
  }

}
