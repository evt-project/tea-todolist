import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
