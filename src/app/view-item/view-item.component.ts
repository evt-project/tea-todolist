import { Component } from '@angular/core';

interface TodoItem {
  list: string;
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
})

export class ViewItemComponent {
  item: TodoItem = {
    list: 'example',
    id: 1,
    title: 'Example title',
    description: 'an example list item for the view model',
    completed: false,
  };
}
