import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-todo-list',
  templateUrl: './add-new-todo-list.component.html',
  styleUrls: ['./add-new-todo-list.component.scss']
})
export class AddNewTodoListComponent {
  title = 'Add-new-todo-list';
  data: AppData = {todos: [{
    title: 'First todo', completed: true},
    {title: 'Second todo', completed: false}]};
}
export interface Todo {
  title: string;
  completed: boolean;
}
export interface AppData {
  todos: Array<Todo>;
}
