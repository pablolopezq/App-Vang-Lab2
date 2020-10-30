import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './../../Models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input()
  selectedTask: Task;
  @Output() stateChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onStateChange(event): void {
    this.stateChange.emit(parseInt(event.target.value, 10));
  }
}
