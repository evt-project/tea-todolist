import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})

export class AddItemComponent implements OnInit {
  items = [];
  // itemList -> chenge next whit the list of lists for choice one
  itemList = 'example';
  itemID: number = this.items.length + 1;
  itemTitle: string;
  itemDescription: string;

  ngOnInit() {
    this.itemTitle = '';
    this.itemDescription = '';
  }

  addItem() {
    this.items.push({
      list: this.itemList,
      id: this.itemID,
      title: this.itemTitle,
      description: this.itemDescription,
      completed: false,
    });

    this.itemID++;

    this.ngOnInit();
  }

}
