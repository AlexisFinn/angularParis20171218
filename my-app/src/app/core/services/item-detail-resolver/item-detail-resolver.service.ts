import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Item } from '../../../shared/interfaces/item.model';
import { CollectionService } from '../collection/collection.service';

import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ItemDetailResolverService implements Resolve<Item> {

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
    let id = route.paramMap.get('id');
    return this.collectionService.getItem(id).take(1).map(data => {
      if (data) {
        // console.log(`item form resolver : ${this.item.name}`);
        return data;
      } else { // if not found
        this.router.navigate(['/items']);
        return null;
      }
    });
  }
}
