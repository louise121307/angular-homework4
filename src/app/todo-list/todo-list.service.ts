import { Injectable } from '@angular/core';

// Class
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private list: Todo[] = [];

  constructor() {
    // default item
    this.add('Item 1');
    this.add('Item 2', true);
    this.add('Item 3');
  }

  getList(): Todo[] {
    return this.list;
  }

  getListWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.getCompleted() === completed);
  }

  // get item by index
  getItem(index: number): Todo {
    return this.list.find(item => item.getIndex() === index);
  }

  add(title: string, completed?: boolean): void {
    if (title || title.trim()) {
      this.list.push(new Todo(this.newIndex(), title, completed));
    }
  }

  // 取得目前最大的 index + 1
  newIndex(): number {
    if (this.list.length > 0) {
      return Math.max(...this.list.map(item => item.getIndex())) + 1;
    } else { return 0; }
  }

  remove(index: number): void {
    this.list.splice(index, 1);
  }

  update(index: number, newTitle: string): void {
    const title = newTitle.trim();
    if (title) {
      // 如果有輸入名稱則修改事項名稱
      this.getItem(index).setTitle(title);
    } else {
      // 如果沒有名稱則刪除該項待辦事項
      this.remove(index);
    }
  }

}
