import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})

export class AddItemComponent implements OnInit {
  itemTitle: string;
  itemDescription: string;

  ngOnInit() {
    this.itemTitle = '';
    this.itemDescription = '';
  }

  addItem() {
    console.log(this.itemTitle);
    console.log(this.itemDescription);
    this.ngOnInit();
  }

}
