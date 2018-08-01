import { Component, OnInit, Output, Input } from '@angular/core';
import { Todo } from '../classes/todo';

const TODOS_STORAGE_IDENTIFIER = "storedTodos";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  toDoText: string = "";
  tab_1: string = "To Be Completed";
  tab_2: string = "Completed";

  toDoList: Todo[];

  constructor() {
    this.toDoList = JSON.parse(localStorage.getItem(TODOS_STORAGE_IDENTIFIER)) || [];
  }

  ngOnInit() {
  }

  newToDo(): void {
    const nextTodo = new Todo(this.toDoText);
    this.toDoList.push(nextTodo);
    this._updateLocalStorage();
    this.toDoText = "";
    console.log(nextTodo);
  }

  markTodoComplete(todo: Todo): void {
    todo.complete = true;
    this._updateLocalStorage();
  }

  private _updateLocalStorage(): void {
    localStorage.setItem(TODOS_STORAGE_IDENTIFIER, JSON.stringify(this.toDoList));
  }

}
