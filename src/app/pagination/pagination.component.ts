import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Card} from '../models/Card';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {

  @Input() page: number;
  @Input() current: number;
  @Output() notifyUpdatePage: EventEmitter<number> = new EventEmitter<number>();
  numbers: Array<number>;

  constructor() { }

  ngOnChanges(): void {
    this.numbers = Array(this.page).fill(0).map((x, i) => i + 1);
  }
  updatePage = (val: number) => {
    this.notifyUpdatePage.emit(val);
  }
}
