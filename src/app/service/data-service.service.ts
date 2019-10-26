import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: object = {
    idOne: {
      first: [
        {
          list: 'first',
          id: 'aaa',
          title: 'First list title item',
          description: 'Example description for first list title item',
          completed: false,
        },
      ],
    },
    idTwo : {
      second: [
        {
          list: 'second',
          id: 'bbb',
          title: 'Second list title item',
          description: 'Example description for first second title item',
          completed: false,
        },
      ],
    },
    idThree : {
      third: [
        {
          list: 'third',
          id: 'ccc',
          title: 'Third list title item',
          description: 'Example description for third second title item',
          completed: false,
        },
      ],
    },
  };

  getAll() {
    return this.data;
  }
  // // Add an item in a specific list
  addItem(idLists: string, listName: string, item: object) {
    if (listName in this.data[idLists]) {
      this.data[idLists][listName].push(item);
    }
  }
  // Add a list whit an item inside, or an empty list
  addList(idLists: string, listName: string, ...item: object[]) {
      this.data[idLists][listName] = [item];
  }
  // Remove an item form a specific list
  removeItem(idLists: string, listName: string, idItem: string) {
    this.data[idLists][listName] = this.data[idLists][listName].filter((x) => x.id !== idItem);
    // can we add if the length of data[0][list] is <= 0 remove the list
  }
  // // Remove a list
  removeList(idLists: string, listName: string) {
    delete this.data[idLists][listName];
  }
  // Remove List of Lists
  removeListOfLists(idLists: string) {
    delete this.data[idLists];
  }
}
