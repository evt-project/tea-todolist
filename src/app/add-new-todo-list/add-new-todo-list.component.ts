import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-todo-list',
  templateUrl: './add-new-todo-list.component.html',
  styleUrls: ['./add-new-todo-list.component.scss'],
})
export class AddNewTodoListComponent {
  todos = [];
  listTitle = '';
  label = '';

  addTodo() {
    this.todos.push({
      title: this.listTitle,
      description: this.label,
    });
    this.listTitle = '';
    this.label = '';
  }
}
