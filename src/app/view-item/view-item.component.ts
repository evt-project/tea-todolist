import { Component, Input } from '@angular/core';

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
  @Input() items: TodoItem;
}
