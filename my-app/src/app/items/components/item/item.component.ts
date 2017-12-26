import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../shared/interfaces/item.model';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection/collection.service';
import { ModalService } from '../../../core/services/modal/modal.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('item') item: Item;
  state = State;

  constructor(
    private collectionService: CollectionService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
  }

  changeState(newState: State) {
    this.item.state = newState;
    this.collectionService.update(this.item);
  }

  process() {
    this.modalService.createModal('Confirmation', 'Voulez vous appretez à supprimer une commande ?', ModalComponent).then((result) => {
      // console.log(result); // if click cancel btn
    }, (reason) => {
      // console.log(reason); // return Confirm Click if click confirm btn, 0 if ESC key and 1 if click outside the modal
      if (reason !== 0 && reason !== 1) {
        this.delete();
      }
    });
  }

  delete() {
    this.collectionService.delete(this.item);
  }
}
