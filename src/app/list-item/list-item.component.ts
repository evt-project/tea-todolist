import { Component } from '@angular/core';
import { TodoItem } from '../view-item/view-item.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {

  items: TodoItem [] = [
    {
      list: 'First',
      id: 1,
      title: 'First title',
      description: 'an example list item for the view model',
      completed: false,
    },
    {
      list: 'Second',
      id: 1,
      title: 'Second title',
      description: 'an example list item for the view model',
      completed: false,
    },
    {
    list: 'Third',
    id: 1,
    title: 'Third title',
    description: 'an example list item for the view model',
    completed: false,
    },
  ];
}
