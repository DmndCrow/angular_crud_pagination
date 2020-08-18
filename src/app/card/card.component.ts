import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../models/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() index: number;
  @Output() deleteCardItem: EventEmitter<Card> = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
    console.log('init card component');
  }

  deleteCard = () => {
    this.deleteCardItem.emit(this.card);
  }

}
