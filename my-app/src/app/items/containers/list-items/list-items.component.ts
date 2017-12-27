import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Item } from '../../../shared/interfaces/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  collection$: Observable<Item[]>;

  // --- pagination ----
  page: number;
  maxSize: number;
  pageSize: number;
  rotate: Boolean;
  ellipses: Boolean;
  boundaryLinks: Boolean;
  // --- pagination ----
  startIndex: number;

  constructor(private _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection$ = this._CollectionService.getCollection();
    // --- pagination conf ----
    this.page = 1;
    this.maxSize = 5;
    this.pageSize = 5;
    this.rotate = true;
    this.ellipses = false;
    this.boundaryLinks = true;
    // --- pagination conf ----
    this.startIndex = 0;
  }

  changePage(numPage: number) {
    this.page = numPage;
    this.startIndex = (numPage - 1) * this.pageSize;
  }
}
