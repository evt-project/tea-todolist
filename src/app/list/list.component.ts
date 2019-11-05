import { Component } from '@angular/core';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DataService],
})
export class ListComponent {
  lists = [];
  constructor(
    dataService: DataService,
    ) {
    this.lists = dataService.listData();
  }
}
