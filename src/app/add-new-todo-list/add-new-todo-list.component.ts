import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-todo-list',
  templateUrl: './add-new-todo-list.component.html',
  styleUrls: ['./add-new-todo-list.component.scss'],
})
export class AddNewTodoListComponent {
  List = [];
  id = '';
  listTitle = '';
  item = [];

  addList() {
    this.List.push({
      list: this.item,
      // add id
      name: this.listTitle,
      item: this.item,
    });
    this.listTitle = '';
  }
}
