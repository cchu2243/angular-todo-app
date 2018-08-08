import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const TODOS_STORAGE_IDENTIFIER = "storedTodos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: Todo[] = [];

  constructor() {
    this._todos = JSON.parse(localStorage.getItem(TODOS_STORAGE_IDENTIFIER)).map(todo => {
      return new Todo(todo);
    });
  }

  getTodoList() : Observable<Todo[]> {
    return of(this._todos);
  }

  addTodo(todo: Todo) {
    this._todos.push(todo);
    localStorage.setItem(TODOS_STORAGE_IDENTIFIER, JSON.stringify(this._todos));
  }
}
