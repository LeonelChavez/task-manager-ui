import { Component } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TareaFormComponent {
  task:Task=new Task();

  constructor(private taskService:TaskService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    const TASKID = +this.route.snapshot.paramMap.get('id')!;
    if(TASKID){
      this.taskService.getTaskById(TASKID).subscribe(task => {
        this.task = task;
      });
    }
  }

  onSaveTask():void{
    if(this.task.id){
      this.taskService.updateTask(this.task.id, this.task).subscribe( updatedTask => {
        this.router.navigate(['/task']);
      });
    } else{
      this.taskService.createTask(this.task).subscribe( savedTarea => {
        this.router.navigate(['/task']);
      });
    }

  }
}
