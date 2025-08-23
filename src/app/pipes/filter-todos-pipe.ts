import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(value: Todo[],  searchBy: string): Todo[] {
    //console.log('Value: ', value);
    //console.log('Search By: ', searchBy);

    if (searchBy.length === 0) {
      return value;
    }

    return value.filter(todo => todo.title.toLowerCase().includes(searchBy.toLowerCase()));
  }

}
