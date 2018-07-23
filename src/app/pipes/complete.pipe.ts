import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../classes/todo';

@Pipe({
  name: 'isComplete',
  pure: false
})
export class CompletePipe implements PipeTransform {

  transform(value: any, complete: boolean = true): any {
    return value.filter(item => {
      return item.complete == complete;
    });
  }

}
