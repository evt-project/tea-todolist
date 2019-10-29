import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-todo-list',
  templateUrl: './add-new-todo-list.component.html',
  styleUrls: ['./add-new-todo-list.component.scss']
})
export class AddNewTodoListComponent {
  todos = [
    {
      label: ''
    }];

  addTodo(newTodoLabel){
    var newTodo = {
      label: newTodoLabel,
    };
    this.todos.push(newTodo);
  }
}
