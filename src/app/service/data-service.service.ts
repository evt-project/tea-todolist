import { Injectable } from '@angular/core';
import { Item, List } from '../model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: List[] = [
      {
        id: 'aaa',
        name: 'list_1',
        item: [
          {
            list: 'list_1',
            id: 'list_id_1',
            title: 'Title list_1',
            description: 'this is the descr for Titile list_1',
            completed: false,
          },
        ],
      },
      {
        id: 'bbb',
        name: 'list_2',
        item: [
          {
            list: 'list_2',
            id: 'list_id_2',
            title: 'Title list_2',
            description: 'this is the descr for Titile list_2',
            completed: false,
          },
        ],
      },

  ];

  listData() {
    return this.data;
  }
  // Add an item in a specific list
  addItem(idList: string, todo: Item) {
    this.data.map(x => (x.id === idList) ? x.item.push(todo) : false);
  }
  // Add a list whit an item inside, or an empty list
  addList(list: List) {
    this.data.push(list);
  }
  // Remove an item form a specific list
  removeItem(idList: string, idItem: string) {
    this.data.map(x => (x.id === idList) ? x.item = x.item.filter(a => a.id !== idItem) : false);
    // can we add if the length of data[0][list] is <= 0 remove the list
  }
  // // Remove a list
  removeList(idList: string) {
    this.data = this.data.filter(x => x.id !== idList);
  }
}
