import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { ModalComponent } from '../shared/components/modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemComponent,
    ListItemsComponent,
    AddComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ItemsModule { }
