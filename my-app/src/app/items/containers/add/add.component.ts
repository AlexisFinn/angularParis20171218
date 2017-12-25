import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CollectionService } from '../../../core/services/collection/collection.service';
import { ModalService } from '../../../core/services/modal/modal.service';

import { Item } from '../../../shared/interfaces/item.model';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, OnDestroy {

  private validation$: BehaviorSubject<Boolean>;

  constructor(
    private collectionService: CollectionService,
    private router: Router,
    private ngbModalService: NgbModal,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.validation$ = this.modalService.validation$;
  }

  addItem(item: Item): void {
    const modalRef = this.ngbModalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Confirmation';
    modalRef.componentInstance.msg = 'Voulez vous vraiment ajouter cette commande ?';
    this.validation$.subscribe(res => {
      if (res) {
        this.collectionService.addItem(item);
        this.router.navigate(['/list']);
      }
    });
  }

  ngOnDestroy(): void {
    this.validation$.unsubscribe();
  }
}
