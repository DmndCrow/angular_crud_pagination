import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Card} from '../models/Card';

// input component which is child of app component
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{
  // emitter that will create new card
  @Output() notifySubmit: EventEmitter<Card> = new EventEmitter<Card>();

  card: Card;

  // initialize card name and description
  ngOnInit(): void {
    this.card = new Card('-1', '', '');
  }

  // update card name
  onChangeName = (ev) => {
    this.card.name = ev.target.value;
  }
  // update card description
  onChangeDescription = (ev) => {
    this.card.description = ev.target.value;
  }

  // start emitter to save card
  submit = (ev) => {
    ev.preventDefault();
    // check if card name is not empty
    if (this.card.name.length) {
      // emit to parent
      this.notifySubmit.emit(this.card);
      // clear card
      this.card = new Card('-1', '', '');
    }
  }
}
