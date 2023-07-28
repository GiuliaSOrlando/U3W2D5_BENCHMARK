import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OngoingComponent } from './Pages/ongoing/ongoing.component';
import { CompletedComponent } from './Pages/completed/completed.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SingleTodoComponent } from './Components/single-todo/single-todo.component';
import { FormsModule } from '@angular/forms';
import { TodoInputComponent } from './Components/todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    OngoingComponent,
    CompletedComponent,
    NavbarComponent,
    SingleTodoComponent,
    TodoInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
