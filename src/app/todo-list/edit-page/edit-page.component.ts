import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Service
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css', '../todo-list/todo-list.component.css']
})
export class EditPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private todoListService: TodoListService) { }

  index = -1;
  title = '';

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.index = Number(params.index);
    });
    this.title = this.todoListService.getItem(this.index).getTitle();
  }

  goBack(): void {
    this.location.back();
  }

  editTodo(): void {
    this.todoListService.update(this.index, this.title);
    this.location.back();
  }

}
