import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class ItemsComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}

