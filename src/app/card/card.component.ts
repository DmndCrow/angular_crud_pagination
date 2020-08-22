import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../models/Card';

// component card which child of app component
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // model Card that we get from parent component
  @Input() card: Card;
  // emitter that will delete card in parent component
  @Output() deleteCardItem: EventEmitter<Card> = new EventEmitter<Card>();
  // emitter that will force to open modal in parent component
  @Output() updateCardItem: EventEmitter<Card> = new EventEmitter<Card>();

  // function to delete emitter
  deleteCard(): void {
    this.deleteCardItem.emit(this.card);
  }
  // function that will force to open modal
  editCard(): void {
    this.updateCardItem.emit(this.card);
  }
}
