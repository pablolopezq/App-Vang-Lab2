import { Task } from './../../Models/Task';
import { Component, OnInit } from '@angular/core';
import { States } from './../../Models/States';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  tasks: Array<Task>;
  selectedTask: Task;

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      { Id: 1, Name: 'Tarea 1 ', State: States.Done, Descripcion: 'Tarea 1 disponible', Time: '10 min' },
      { Id: 2, Name: 'Tarea 2 ', State: States.Pending, Descripcion: 'Tarea 2 disponible', Time: '10 min' },
      { Id: 3, Name: 'Tarea 3 ', State: States.Pending, Descripcion: 'Tarea 3 disponible', Time: '10 min' },
      { Id: 4, Name: 'Tarea 4 ', State: States.Pending, Descripcion: 'Tarea 4 disponible', Time: '10 min' }
    ];
  }
  onClick(task: Task): void {
    this.selectedTask = task;
  }
  onStateChange(value): void {
    this.selectedTask.State = value;
    this.tasks.forEach((task) => {
      if (task.Id === this.selectedTask.Id){
        return task = this.selectedTask;
      }
    });
  }
}
