import { Component } from '@angular/core';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DataService],
})
export class ListComponent {

  lists = this.dataService.listData();

  constructor(
    readonly dataService: DataService,
  ) {
  }
}
