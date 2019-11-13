import { Component } from '@angular/core';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-add-new-todo-list',
  templateUrl: './add-new-todo-list.component.html',
  styleUrls: ['./add-new-todo-list.component.scss'],
  providers: [DataService],
})
export class AddNewTodoListComponent {
    list = [];
    listTitle = '';

    addList() {
      this.list.push({
        list: this.list,
        id: '',
        title: this.listTitle,
      });
    }

    constructor(
      dataService: DataService,
    ) {
      this.list = dataService.listData();
    }
}
