import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ModalService {
  validation$: BehaviorSubject<Boolean>;

  constructor (private router: Router) {
    this.validation$ =new BehaviorSubject(null);
  }

  redirect(route: string): void {
    this.router.navigate([route]);
  }
}
