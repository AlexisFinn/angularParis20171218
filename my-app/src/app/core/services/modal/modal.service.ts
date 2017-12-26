import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Injectable()
export class ModalService {

  constructor (private ngbModalService: NgbModal) {
  }

  createModal(title: string, msg: string, content) {
    const modalRef = this.ngbModalService.open(content);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.msg = msg;
    return modalRef.result;
  }
}
