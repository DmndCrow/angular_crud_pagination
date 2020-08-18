import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Card} from '../models/Card';

@Component({
  selector: 'app-page-limit',
  templateUrl: './page-limit.component.html',
  styleUrls: ['./page-limit.component.css']
})
export class PageLimitComponent {
  limit = 5;
  limitMin = 2;
  limitMax = 10;
  @Output() notifyLimit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  onChange = (ev) => {
    if (this.limitMin <= ev.target.value && ev.target.value <= this.limitMax){
      this.limit = ev.target.value;
    }else{
      this.limit = 5;
    }
    this.notifyLimit.emit(this.limit);
  }
}
