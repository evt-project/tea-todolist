import { Component } from '@angular/core';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  providers: [DataService],
})
export class ListItemComponent {
  itemsList = [];
  constructor(dataService: DataService) {
    this.itemsList = dataService.listData();
  }
}
