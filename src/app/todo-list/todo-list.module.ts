import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ItemComponent } from './item/item.component';
import { InputComponent } from './input/input.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoListComponent, ItemComponent, InputComponent, EditPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
