import { Component } from '@angular/core';
import { Task } from '../task/models/Task';
import { TaskService } from '../task/services/task.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks?:Task[];

  constructor(private taskService:TaskService){}

  ngOnInit():void{
    this.getTasks();
  }

  getTasks():void{
    this.taskService.getAllTasks().subscribe( tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(id?:number):void{
    this.taskService.deleteTask(id!).subscribe( () => {
      this.getTasks();
    });
  }
}
