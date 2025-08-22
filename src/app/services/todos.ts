import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.type';

@Injectable({
  providedIn: 'root'
})
export class Todos {
  todoItems = signal<Todo[]>([
    {
      id: '1',
      title: 'Buy groceries',
      completed: true,
      userId: 1
    },
    {
      id: '2',
      title: 'Learn Angular',
      completed: false,
      userId: 3
    },
  ]);
}
