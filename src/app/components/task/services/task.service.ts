import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  [x: string]: any;
  private apiUrl='http://localhost:8080/api/task';

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskById(id:number):Observable<Task>{
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl + '/create', task);
  }

  updateTask(id:number,task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
