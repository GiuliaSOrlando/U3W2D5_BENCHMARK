import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent {
  @Input() todo!: Todo;

  newTodo = new Todo(0, '', false);

  constructor(private service: TodosService, private router: Router) {}

  addSingleTodo() {
    this.service.addTodo(this.newTodo).then((res) => console.log(res));
  }
}
