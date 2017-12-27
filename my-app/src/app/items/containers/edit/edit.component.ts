import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CollectionService } from '../../../core/services/collection/collection.service';
import { ModalService } from '../../../core/services/modal/modal.service';
import { Item } from '../../../shared/interfaces/item.model';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  titleForm: string; // dynamique title get by formComponent  with an @Input()
  item$: Observable<Item>; // CollectionService.getItem() return an Observable

  id: string; // get existing id in ngOnInit()

  constructor(
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.item$ = this.collectionService.getItem(this.id);
    this.titleForm = 'Modifier une commande';
  }

  process(item: Item): void {
    this.modalService.createModal('Confirmation', 'Valider les modifications ?', ModalComponent).then((result) => {
      // console.log(result); // if click cancel btn
    }, (reason) => {
      // console.log(reason); // return Confirm Click if click confirm btn, 0 if ESC key and 1 if click outside the modal
      if (reason !== 0 && reason !== 1) {
        this.updateItem(item);
      }
    });
  }

  updateItem(item: Item): void {
    this.collectionService.update(item);
    this.router.navigate(['/items']);
  }
}
