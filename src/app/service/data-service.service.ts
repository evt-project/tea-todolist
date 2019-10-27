import { Injectable } from '@angular/core';
import { ListOfList } from '../model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: ListOfList = [
      {
        id:'aaa',
        name:'list_1',
        item: [
          {
            list: 'list_1',
            id: 'list_id_1',
            title:"Title list_1",
            description:"this is the descr for Titile list_1",
            completed:false,
          },
        ],
      },
      {
        id:'bbb',
        name:'list_2',
        item: [
          {
            list: 'list_2',
            id: 'list_id_2',
            title:"Title list_2",
            description:"this is the descr for Titile list_2",
            completed:false,
          },
        ],
      },

  ];

  listData() {
    return this.data;
  }
  // // // Add an item in a specific list
  // addItem(idLists: string, listName: string, item: object) {
  //   if (listName in this.data[idLists]) {
  //     this.data[idLists][listName].push(item);
  //   }
  // }
  // // Add a list whit an item inside, or an empty list
  // addList(idLists: string, listName: string, ...item: object[]) {
  //     this.data[idLists][listName] = [item];
  // }
  // // Remove an item form a specific list
  // removeItem(idLists: string, listName: string, idItem: string) {
  //   this.data[idLists][listName] = this.data[idLists][listName].filter((x) => x.id !== idItem);
  //   // can we add if the length of data[0][list] is <= 0 remove the list
  // }
  // // // Remove a list
  // removeList(idLists: string, listName: string) {
  //   delete this.data[idLists][listName];
  // }
  // // Remove List of Lists
  // removeListOfLists(idLists: string) {
  //   delete this.data[idLists];
  // }
}
