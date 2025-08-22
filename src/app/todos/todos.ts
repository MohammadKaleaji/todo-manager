import { Component, computed, inject, OnInit } from '@angular/core';
import { Header } from '../components/header/header';
import { Todos as TodosService } from '../services/todos';
import { HighlightCompleted } from '../directives/highlight-completed';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [Header, HighlightCompleted, TitleCasePipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
  todosService = inject(TodosService);
  todos = computed(() => this.todosService.todoItems());
  
  ngOnInit(): void {
    this.todosService.getTodosFromServer().subscribe((todos) => {
      this.todosService.todoItems.set(todos);
    });
  }

  toggleTodo(todoId: string) {
    const currentTodos = this.todosService.todoItems();
    const updatedTodos = currentTodos.map(todo => 
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    this.todosService.todoItems.set(updatedTodos);
  }
}
