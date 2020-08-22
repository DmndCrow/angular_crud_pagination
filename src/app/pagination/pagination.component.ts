import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Card} from '../models/Card';

// pagination component that is child of app component
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  // total number of pages
  @Input() page: number;
  // current active page
  @Input() current: number;
  // emitter that will notify parent component
  @Output() notifyUpdatePage: EventEmitter<number> = new EventEmitter<number>();
  // temporary array to display indices
  numbers: Array<number>;

  // create new array for each change in number of pages per page
  ngOnChanges(): void {
    this.numbers = Array(this.page).fill(0).map((x, i) => i + 1);
  }
  // change page in parent component
  updatePage(val: number): void {
    this.notifyUpdatePage.emit(val);
  }
  // return current_page - 1 to parent component
  clickLeft(): void {
    this.notifyUpdatePage.emit(this.current - 1);
  }
  // return current_page + 1 to parent component
  clickRight(): void {
    this.notifyUpdatePage.emit(this.current + 1);
  }
}
