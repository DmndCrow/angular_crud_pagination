import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {Card} from '../models/Card';

// modal component that is child of app component
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges {
  // boolean value that will show modal if this field is true
  @Input() active: boolean;
  // card that will be updated
  @Input() card: Card;
  // emitter to return new card
  @Output() updateCardItem: EventEmitter<Card> = new EventEmitter<Card>();
  // data that will be saved from inputs
  newCard: Card;

  constructor() { }

  // set card from parent to child
  ngOnChanges(): void {
    this.newCard = this.card;
  }
  // update card name
  changeCardName = (ev) => {
    this.newCard.name = ev.target.value;
  }
  // update card description
  changeCardDescription = (ev) => {
    this.newCard.description = ev.target.value;
  }

  // save new name and description
  saveCardUpdate = () => {
    this.updateCardItem.emit(this.card);
  }
  // cancel update and return original card
  cancelCardUpdate = () => {
    this.updateCardItem.emit(this.card);
  }
}
