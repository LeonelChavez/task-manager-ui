import { Observable } from "rxjs";
import { Task } from "../../models/Task";
import { TaskRepository } from "../../repositories/task-repository";
import { TaskService } from "../../services/task.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
 })
export class TaskRepositoryImpl implements TaskRepository{
  constructor(private taskService: TaskService) {}
  override getTasks(): Observable<Task[]> {
    throw new Error("Method not implemented.");
  }
  override addTask(task: Task): Observable<Task> {
    throw new Error("Method not implemented.");
  }
  override updateTask(task: Task): Observable<void> {
    throw new Error("Method not implemented.");
  }
  override deleteTask(id: number): Observable<void> {
    throw new Error("Method not implemented.");
  }
}
