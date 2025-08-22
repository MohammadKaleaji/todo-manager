import { Component, computed, inject, OnInit } from '@angular/core';
import { Header } from '../components/header/header';
import { Todos as TodosService } from '../services/todos';

@Component({
  selector: 'app-todos',
  imports: [Header],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
  todosService = inject(TodosService);
  todos = computed(() => this.todosService.todoItems());
  ngOnInit(): void {
    const todos = this.todosService.todoItems();
    console.log(todos);
  }
}
