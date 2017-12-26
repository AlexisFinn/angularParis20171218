import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CollectionService } from '../../../core/services/collection/collection.service';
import { ModalService } from '../../../core/services/modal/modal.service';

import { Item } from '../../../shared/interfaces/item.model';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(
    private collectionService: CollectionService,
    private router: Router,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  process(item: Item): void {
    this.modalService.createModal('Confirmation', 'Voulez vous ajouter cette commande ?', ModalComponent).then((result) => {
      // console.log(result); // if click cancel btn
    }, (reason) => {
      // console.log(reason); // return Confirm Click if click confirm btn, 0 if ESC key and 1 if click outside the modal
      if (reason !== 0 && reason !== 1) {
        this.addItem(item);
      }
    });
  }

  addItem(item: Item): void {
    this.collectionService.addItem(item);
    this.router.navigate(['/items']);
  }
}
