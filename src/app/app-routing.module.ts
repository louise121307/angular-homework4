import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPageComponent } from './todo-list/edit-page/edit-page.component';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'edit/:index',
    component: EditPageComponent
  },
  {
    path: '',
    component: TodoListComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
