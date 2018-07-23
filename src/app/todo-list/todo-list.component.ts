import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public toDoText: string;
  public index: number;

  public tab_1: string = "To Be Completed";
  public tab_2: string = "Completed";

  public toDoList: Todo[];
  public completedToDos: Todo[] = [];
  public storageToDos: Todo[];
  public selectedToDo: Todo;
  public completedToDo: Todo;
  public ratio: number;

  public timer: number;
  public allowDoubleClick: boolean;

  constructor() {
    this.getTodos();
    this.toDoList = this.storageToDos;
    this.toDoText = "";
    if(this.toDoList.length <= 0){
      this.index = -1;
    }
    else{
      this.index = this.toDoList.length;
    }
  }

  newToDo(){
    this.index++;
    console.log("after initializing " + this.toDoList);
    let nextTodo = new Todo(this.index, this.toDoText);
    this.toDoList.push(nextTodo);
    this.updateLocalStorage(this.toDoList);
    this.toDoText = "";
  }

  removeToDo(selectedToDo){
  this.timer = 0;
  this.allowDoubleClick = false;
  let delay = 200;

   this.timer = setTimeout(() => {
     if(!this.allowDoubleClick){
       this.toDoList = this.toDoList.filter((todo) => todo.id != selectedToDo.id);
       this.updateLocalStorage(this.toDoList);
       this.makeCompleteList(selectedToDo);
     }
   }, delay);
  }

  makeCompleteList(selectedToDo){
    return this.completedToDos.push(selectedToDo);
  }

  editToDo(){
    this.allowDoubleClick = true;
    clearTimeout(this.timer);
    console.log("double click!!!");
  }

  getTodos(){
    let storedToDo = JSON.parse(localStorage.getItem('toDoList'));
    console.log("result: " + storedToDo.toDoList);
    this.storageToDos = storedToDo.toDoList;
  }

  updateLocalStorage(toDoList: Todo[]){
    localStorage.setItem('toDoList', JSON.stringify({toDoList: toDoList}));
  }

  ngOnInit() {
  }

}
