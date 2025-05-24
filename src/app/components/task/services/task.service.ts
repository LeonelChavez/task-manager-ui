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

  getAll():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  getById(id:number):Observable<Task>{
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  create(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl + '/create', task);
  }

  update(id:number,task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
