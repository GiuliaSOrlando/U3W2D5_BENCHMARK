import { Todo } from './../../todo';
import { Component, OnChanges, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';
import { TodoInputComponent } from '../todo-input/todo-input.component';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss'],
})
export class SingleTodoComponent implements OnInit, OnChanges {
  todos: Todo[] = [];
  isEditing: object = {};
  isJson: boolean = false;
  newTodo = new Todo(0, '', false);

  constructor(private service: TodosService) {}
  ngOnInit() {
    this.service.getTodo().then((todos: Todo[]) => {
      this.todos = todos;
      this.isJson = true;
      this.ngOnChanges();
      console.log(this.todos);
    });
  }

  editSingleTodo(todo: Todo) {
    this.isEditing = { id: todo.id, status: true };
  }

  saveTodo(todo: Todo) {
    this.service.updateTodo(todo).then((res) => {
      this.newTodo.title;
    });
  }

  deleteSingleTodo(todo: Todo) {
    this.service.deleteTodo(todo.id).then(() => {
      this.todos = this.todos.filter((singletodo) => singletodo.id !== todo.id);
    });
  }

  ngOnChanges() {
    console.log(this.todos);
    if (this.todos.length === 0) {
      this.isJson = false;
    }
  }
}
