import {Component, EventEmitter, Output} from '@angular/core';
import {Card} from '../models/Card';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  name = '';
  description = '';

  @Output() notifySubmit: EventEmitter<Card> = new EventEmitter<Card>();

  onChangeName = (ev) => {
    this.name = ev.target.value;
  }

  onChangeDescription = (ev) => {
    this.description = ev.target.value;
  }

  submit = (ev) => {
    ev.preventDefault();
    if (this.name.length) {
      const card: Card = new Card('1', this.name, this.description);
      this.notifySubmit.emit(card);
      this.name = '';
      this.description = '';
    }
  }
}
