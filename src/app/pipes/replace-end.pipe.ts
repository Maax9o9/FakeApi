import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceEnd',
  standalone: true,
})
export class ReplaceEndPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value; 

    const lastChar = value.charAt(value.length - 1);
    if (lastChar === 'a' || lastChar === 'o') {
      return value.slice(0, -1) + 'x';
    }

    return value; 
  }
}
