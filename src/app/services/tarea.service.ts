import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private baseUrl='http://localhost:8080/api/task';

  constructor(private http:HttpClient) { }

  getAllTareas():Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl);
  }

  getTareaById(id:number):Observable<Task>{
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

  createTarea(tarea:Task):Observable<Task>{
    return this.http.post<Task>(this.baseUrl + '/create', tarea);
  }

  updateTarea(id:number,tarea:Task):Observable<Task>{
    return this.http.put<Task>(`${this.baseUrl}/${id}`, tarea);
  }

  deleteTarea(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
