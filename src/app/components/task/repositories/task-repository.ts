import { Observable } from "rxjs";
import { Task } from "../models/Task";

export abstract class TaskRepository {
  abstract getTasks(): Observable<Task[]>;
  abstract addTask(task: Task): Observable<Task>;
  abstract updateTask(task: Task): Observable<void>;
  abstract deleteTask(id: number): Observable<void>;
}
