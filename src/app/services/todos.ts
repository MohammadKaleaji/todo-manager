import { inject, Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';
import { catchError, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Todos {
  todoItems = signal<Todo[]>([]);
  http = inject(HttpClient);
  
  getTodosFromServer(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      catchError((error) => {
        console.error('Error fetching todos:', error);
        return of([]);
      })
    );
  } 
}
