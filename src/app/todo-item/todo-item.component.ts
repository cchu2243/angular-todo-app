import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../classes/todo';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
   @Input() todo: Todo;
   @Output() onTodoChange: EventEmitter<Todo> = new EventEmitter<Todo>();

   isEditing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  emitTodo(){
    this.onTodoChange.emit(this.todo);
  }

}
