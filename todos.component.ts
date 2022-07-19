import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;

  inputTodo:string="";

  constructor() { }

  ngOnInit(): void {
    this.todos= [
      {
        content:'Attend morning call',
        completed : false
      },
      {
        content:'Work on task',
        completed:false
      },
      {
        content:'Attend classes',
        completed : false
      },
      {
        content:'Attend Lab',
        completed:false
      },
      {
        content:'Return home',
        completed : false
      },
      {
        content:'Continue working on task',
        completed:true,
      }
    ]
  }
deleteTodo(id: number){
  this.todos=this.todos?.filter((v,i) =>i !==id);
}
addTodo(){
  this.todos?.push({
    content:this.inputTodo,
    completed:false
  });

  this.inputTodo="";
}


}
