import { Component } from '@angular/core';
import { TodosService } from 'src/app/todos.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  isJson: boolean = false;
  constructor(private service: TodosService) {}
  ngOnInit() {
    this.service.getTodo().then((todos: Todo[]) => {
      this.todos = todos;
      this.isJson = true;
      this.ngOnChanges();
      console.log(this.todos);
    });
  }

  ngOnChanges() {
    console.log(this.todos);
    if (this.todos.length === 0) {
      this.isJson = false;
    }
  }
}
