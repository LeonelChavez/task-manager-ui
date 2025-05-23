import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl='http://localhost:8080/api/task';

  constructor(private http:HttpClient) { }

  getAllTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl);
  }

  getTaskById(id:number):Observable<Task>{
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

  createTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.baseUrl + '/create', task);
  }

  updateTask(id:number,task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.baseUrl}/${id}`, task);
  }

  deleteTask(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
