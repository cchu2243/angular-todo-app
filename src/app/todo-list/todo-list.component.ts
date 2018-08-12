import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '../classes/todo';
import { TodoService } from '../services/todo.service';
import { trigger, transition, animate, style, query } from '@angular/animations'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('frameEnter', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('400ms ease-in', style({transform: 'translateY(0%)'}))
      ])
    ]),
    trigger('listEnter', [
      transition('* => *', [
        style({transform: 'translateX(-100%)'}),
        animate('400ms ease-in', style({transform: 'translateX(0%)'}))
      ])
    ])
  ]
})

export class TodoListComponent implements OnInit {
  toDoText: string = "";
  tab_1: string = "To Be Completed";
  tab_2: string = "Completed";

  todos: Todo[];
  completeTodos: Todo[] = [];

  private _todoSubscription: any;

  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this._todoSubscription = this._todoService.todos.subscribe(todoKV => {
      const allTodos = Object.values(todoKV);
      this.todos = allTodos.filter(todo => !todo.complete);
      this.completeTodos = allTodos.filter(todo => todo.complete);
    });
    console.log(this.todos);
  }

  ngOnDestroy() {
    if(this._todoSubscription) {
      this._todoSubscription.unsubscribe();
    }
  }

  newToDo(): void {
    console.log(this.todos.length);
    this._todoService.setTodo(new Todo(this.toDoText));
    this.toDoText = "";
  }

  handleTodoChange(todo: Todo): void {
    this._todoService.setTodo(todo);
  }

}
