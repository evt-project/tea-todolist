import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Add-new-todo-list';
}
export interface Todo {
  title: string;
  completed: boolean;
}
export interface AppData {
  todos: Array<Todo>;
}
