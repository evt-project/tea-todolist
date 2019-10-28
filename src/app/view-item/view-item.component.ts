import { Component } from '@angular/core';
import { Item } from '../model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],
})

export class ViewItemComponent {
  item: Item = {
    list: 'example',
    id: 'Axsd11',
    title: 'Example title',
    description: 'an example list item for the view model',
    completed: false,
  };
}
