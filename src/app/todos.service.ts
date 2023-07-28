import { Todo } from 'src/app/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todo: Todo[] = [];
  private todoApiUrl: string = 'http://localhost:3000/Todos';
  constructor() {
    this.getTodo().then((res) => (this.todo = res));
  }

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

  getModifyStatus(id: number) {
    this.getTodo().then((res) => {
      this.todo = res;
      const found = this.todo.filter((todo) => todo.id === id)[0];
      console.log(found);
      console.log(this.todo);
      return fetch(this.todoApiUrl + '/' + id, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PATCH',
        body: JSON.stringify({
          completed: !found.completed,
        }),
      }).catch((err) => {
        console.log(err);
      });
    });
  }
}
