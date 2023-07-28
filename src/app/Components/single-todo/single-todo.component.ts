import { Todo } from './../../todo';
import { Component } from '@angular/core';
import { TodosService } from 'src/app/todos.service';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss'],
})
export class SingleTodoComponent {
  isEditing: boolean = false;
  isJson: boolean = false;
  newTodo = new Todo(0, '', false);

  @Input() SingleTodo!: Todo;

  constructor(private service: TodosService) {}

  editSingleTodo(todo: Todo) {
    this.isEditing = true;
  }

  saveTodo(todo: Todo) {
    this.isEditing = false;
    this.service.updateTodo(todo).then((res) => {
      this.SingleTodo = new Todo(
        this.SingleTodo.id,
        this.SingleTodo.title,
        false
      );
    });
  }

  changeStatus(id: number) {
    this.service.getModifyStatus(id);
  }

  deleteSingleTodo(todo: Todo) {
    this.service.deleteTodo(todo.id).then(() => {
      // this.todos = this.todos.filter((singletodo) => singletodo.id !== todo.id);
    });
  }
}
