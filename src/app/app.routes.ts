import { Routes } from '@angular/router';
import { TareaListComponent } from './components/task-list/tarea-list.component';
import { TareaFormComponent } from './components/task-form/task-form.component';

export const routes: Routes = [
  {path:'',redirectTo:'/tareas',pathMatch:'full'},
  {path:'tareas',component:TareaListComponent},
  {path:'tareas/new',component:TareaFormComponent},
  {path:'tareas/:id/edit',component:TareaFormComponent}
];
