import { Injectable } from '@angular/core';

import { COLLECTION } from '../../../items/collection';
import { Item } from '../../../shared/interfaces/item.model';

@Injectable()
export class CollectionService {
  collection: Item[];

  constructor() {
    this.collection = this.getCollection();
  }

  // get collection
  getCollection() {
    return this.collection = COLLECTION;
  }

  // add Item in collection
  addItem(item: Item) {
    this.collection.push(item);
  }

  // update Item in collection
  update() {}

  // delete Item in collection
  delete() {}
}
