import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})

export class AddItemComponent {
  items = [];
  // itemList -> change next with the list of lists for first choice
  itemList = 'example';
  itemTitle = '';
  itemDescription = '';

  addItem() {
    this.items.push({
      list: this.itemList,
      id: this.uniqueIDS(20, '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!*#-'),
      title: this.itemTitle,
      description: this.itemDescription,
      completed: false,
    });
    this.itemTitle = '';
    this.itemDescription = '';
  }

  uniqueIDS(length, chars) {
    let IDS = '';
    for (let i = length; i > 0; --i) {
      IDS += chars[Math.floor(Math.random() * chars.length)];
    }

    return IDS;
  }

}
