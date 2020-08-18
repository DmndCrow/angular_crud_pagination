import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Card} from '../models/Card';

/**
 * @constructor
 * @extends {A<string>}
 * @param {T} t
 */
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {

  @Input() page: number; // total number of pages
  @Input() current: number; // current active page
  // emitter that will notify parent component
  @Output() notifyUpdatePage: EventEmitter<number> = new EventEmitter<number>();
  numbers: Array<number>; // temporary array to display indices

  constructor() { }

  ngOnChanges(): void {
    this.numbers = Array(this.page).fill(0).map((x, i) => i + 1);
  }
  updatePage = (val: number) => {
    this.notifyUpdatePage.emit(val);
  }
  clickLeft = () => {
    this.notifyUpdatePage.emit(this.current - 1);
  }
  clickRight = () => {
    this.notifyUpdatePage.emit(this.current + 1);
  }
}
