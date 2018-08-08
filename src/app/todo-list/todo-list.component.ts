import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '../classes/todo';
import { TodoService } from '../services/todo.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  toDoText: string = "";
  tab_1: string = "To Be Completed";
  tab_2: string = "Completed";

  edit: boolean = false;

  todos$: Observable<Todo[]>;

  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this.todos$ = this._todoService.getTodoList();
  }

  newToDo(): void {
    this._todoService.addTodo(new Todo(this.toDoText));
    this.toDoText = "";
  }

  markTodoComplete(todo: Todo): void {
    todo.complete = true;

  }

  editTodo(todo: Todo): void{
    todo.edit = true;
  }

}
