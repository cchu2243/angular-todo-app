import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';

const TODOS_STORAGE_IDENTIFIER = "storedTodos";

interface ITodoMap { [s: string]: Todo; }

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: ITodoMap = {};
  private _todoSubject: BehaviorSubject<ITodoMap> = new BehaviorSubject({});
  public readonly todos: Observable<ITodoMap> = this._todoSubject.asObservable();

  constructor() {
    this._todos = JSON.parse(localStorage.getItem(TODOS_STORAGE_IDENTIFIER)) || {};
    this._todoSubject.next(this._todos);
  }

  setTodo(todo: Todo) {
    this._todos[todo.id] = todo;
    this._todoSubject.next(this._todos);
    localStorage.setItem(TODOS_STORAGE_IDENTIFIER, JSON.stringify(this._todos));
  }
}
