import { Component } from '@angular/core';
import { List } from '../model';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-add-new-todo-list',
  templateUrl: './add-new-todo-list.component.html',
  styleUrls: ['./add-new-todo-list.component.scss'],
  providers: [DataService],
})
export class AddNewTodoListComponent {
  list: List = {
    id = '',
    name = '',
    item = [],
  };
  constructor(dataService: DataService) {
    this.list = dataService.listData();
  }
}
}
