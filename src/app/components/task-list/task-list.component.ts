import { Component } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [NgFor, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TareaListComponent {
  tareas?:Task[];

  constructor(private tareaService:TaskService){}

  ngOnInit():void{
    this.cargarTareas();
  }

  cargarTareas():void{
    this.tareaService.getAllTasks().subscribe( tareas => {
      this.tareas = tareas;
    });
  }

  eliminarTarea(id?:number):void{
    this.tareaService.deleteTask(id!).subscribe( () => {
      this.cargarTareas();
    });
  }
}
