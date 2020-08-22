import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

// input component to return number of cards per page to app component
@Component({
  selector: 'app-page-limit',
  templateUrl: './page-limit.component.html',
  styleUrls: ['./page-limit.component.css']
})
export class PageLimitComponent{
  // limits for cards per page, with at least 2 and at most 10
  @Input() limitMin: number;
  @Input() limitMax: number;
  @Input() limit: number;

  // emitter to update number of cards per page in parent component
  @Output() notifyLimit: EventEmitter<any> = new EventEmitter<any>();

  // ngOnInit(): void {
  //   this.handleInitValues();
  // }
  // // initialize values
  // handleInitValues(): void {
  //   this.limit = 5;
  // }

  // update limit
  onChange(ev): void {
    // prevent limit of going lower than 2 and higher than 10
    if (this.limitMin <= ev.target.value && ev.target.value <= this.limitMax){
      this.limit = ev.target.value;
    }else{
      this.limit = 5;
    }
    // send to parent component
    this.notifyLimit.emit(this.limit);
  }
}
