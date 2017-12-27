import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  // https://ng-bootstrap.github.io/#/components/pagination/api
  @Input() collectionSize: number;
  @Input() page: number;
  @Input() maxSize: number;
  @Input() pageSize: number;
  @Input() rotate: Boolean;
  @Input() ellipses: Boolean;
  @Input() boundaryLinks: Boolean;

  @Output() doNumPage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pageChange(numPage: number) {
    this.doNumPage.emit(numPage);
  }
}
