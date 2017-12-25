import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Item } from '../../../shared/interfaces/item.model';
import { State } from '../../../shared/enums/state.enum';

@Injectable()
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private collection$: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<Item>('collection');
    this.setCollection(this.itemsCollection.valueChanges());
  }

  // get collection
  getCollection(): Observable<Item[]> {
    return this.collection$;
  }

  // set collection
  setCollection(collection: Observable<Item[]>): void {
    this.collection$ = collection;
  }

  // add Item in collection
  addItem(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  // update Item in collection
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }

  // delete Item in collection
  delete(): void {}
}
