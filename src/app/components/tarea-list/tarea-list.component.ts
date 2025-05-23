import { Component } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/tarea.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarea-list',
  imports: [NgFor, RouterLink],
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
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
