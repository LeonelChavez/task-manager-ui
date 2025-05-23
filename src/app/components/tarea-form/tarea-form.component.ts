import { Component } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-form',
  imports: [FormsModule],
  templateUrl: './tarea-form.component.html',
  styleUrl: './tarea-form.component.css'
})
export class TareaFormComponent {
  tarea:Task=new Task();

  constructor(private tareaService:TaskService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    const TAREAID = +this.route.snapshot.paramMap.get('id')!;
    if(TAREAID){
      this.tareaService.getTaskById(TAREAID).subscribe(tarea => {
        this.tarea = tarea;
      });
    }
  }

  onSaveTarea():void{
    if(this.tarea.id){
      this.tareaService.updateTask(this.tarea.id, this.tarea).subscribe( updatedTarea => {
        this.router.navigate(['/tareas']);
      });
    } else{
      this.tareaService.createTask(this.tarea).subscribe( savedTarea => {
        this.router.navigate(['/tareas']);
      });
    }

  }
}
