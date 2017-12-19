import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { COLLECTION } from '../../collection';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  collection: Item[];
  constructor() { }

  ngOnInit() {
    this.collection = COLLECTION;
  }


  addItem(item: Item): void {
      this.collection.push(item);
    }
}
