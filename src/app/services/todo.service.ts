import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const TODOS_STORAGE_IDENTIFIER = "storedTodos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: any;

  constructor() {
    this._todos = JSON.parse(localStorage.getItem(TODOS_STORAGE_IDENTIFIER)) || {};

    // this._map = JSON.parse(localStorage.getItem(TODOS_STORAGE_IDENTIFIER));

  }

  getTodoList() : Observable<any> {
    return of(this._todos);
  }

  addTodo(todo: Todo) {
    this._todos[todo.id] = todo;
    localStorage.setItem(TODOS_STORAGE_IDENTIFIER, JSON.stringify(this._todos));
  }

  saveTodo(todo: Todo) {
    this._todos[todo.id] = todo;
    localStorage.setItem(TODOS_STORAGE_IDENTIFIER, JSON.stringify(this._todos));
  }
}
