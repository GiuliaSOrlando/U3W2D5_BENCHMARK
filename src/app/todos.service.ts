import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todoApiUrl: string = 'http://localhost:3000/Todos';
  constructor() {}

  // Fetch, metodo:GET
  getTodo(): Promise<Todo[]> {
    return fetch(this.todoApiUrl).then((response) => response.json());
  }

  // Fetch, metodo:POST
  addTodo(todo: Todo): Promise<Todo> {
    return fetch(this.todoApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((response) => response.json());
  }

  // Fetch, metodo:PUT
  updateTodo(todo: Todo): Promise<Todo> {
    return fetch(this.todoApiUrl + '/' + todo.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((response) => response.json());
  }

  //Fetch, metodo:DELETE
  deleteTodo(id: number): Promise<void> {
    return fetch(`${this.todoApiUrl}/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  }
}
