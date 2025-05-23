import { Routes } from '@angular/router';
import { TaskFormComponent } from './components/task/task-form/task-form.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';


export const routes: Routes = [
  {path:'',redirectTo:'/task',pathMatch:'full'},
  {path:'task',component:TaskListComponent},
  {path:'task/new',component:TaskFormComponent},
  {path:'task/:id/edit',component:TaskFormComponent}
];
