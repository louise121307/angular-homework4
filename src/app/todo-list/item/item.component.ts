import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { TodoListService } from '../todo-list.service';

// Enum
import { TodoStatusType } from '../todo-status-type.enum';

// Class
import { Todo } from '../todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  todoStatusType = TodoStatusType;
  private status = TodoStatusType.All;

  constructor(public todoListService: TodoListService, private router: Router) { }

  ngOnInit() {
  }

  setStatus(status: number, event: MouseEvent): void {

    if (event.ctrlKey && status === TodoStatusType.Open) {
      this.getAllList().forEach((todo) => { todo.setCompleted(false); });
    } else if (event.ctrlKey && status === TodoStatusType.Done) {
      this.getAllList().forEach((todo) => { todo.setCompleted(true); });
    }

    this.status = status;

  }

  checkStatus(status: number): boolean {
    return this.status === status;
  }

  getList(): Todo[] {

    let list: Todo[] = [];

    switch (this.status) {

      case TodoStatusType.Open:
        list = this.todoListService.getListWithCompleted(false);
        break;

      case TodoStatusType.Done:
        list = this.todoListService.getListWithCompleted(true);
        break;

      default:
        list = this.todoListService.getList();
        break;

    }

    return list;

  }

  getAllList(): Todo[] {
    return this.todoListService.getList();
  }

  remove(index: number): void {
    this.todoListService.remove(index);
  }

  edit(index: number): void {
    this.router.navigate(['edit', index]);
  }
}
