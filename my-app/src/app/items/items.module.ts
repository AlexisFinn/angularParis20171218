import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './containers/list-items/list-items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ItemComponent,
    ListItemsComponent
  ],
  exports: [
    ItemComponent,
    ListItemsComponent
  ]
})
export class ItemsModule { }
