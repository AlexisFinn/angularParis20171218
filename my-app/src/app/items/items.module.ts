import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { EditComponent } from './containers/edit/edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ItemsRoutingModule,
    NgbModule
  ],
  declarations: [
    ItemComponent,
    ListItemsComponent,
    AddComponent,
    EditComponent
  ]
})
export class ItemsModule { }
