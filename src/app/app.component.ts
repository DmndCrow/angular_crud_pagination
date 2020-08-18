import {Component, OnInit} from '@angular/core';
import {Card} from './models/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SimplePagination';
  cards: Array<Card> = [];
  page: number;
  currentPage: number;
  indexStart: number;
  indexEnd: number;
  limit: number;

  // set initial values for pagination
  ngOnInit(): void {
    for (let i = 0; i < 7; i++){
      const card: Card = new Card(i.toString(), 'test' + i, '__repr__' + i);
      this.cards.push(card);
    }
    this.limit = 5;
    this.indexStart = 0;
    this.currentPage = 1;
    this.updateIndices();
  }

  // create new card
  createCard = (card: Card) => {
    // we want to generate card with unique id
    card.id = card.generateId(this.cards);
    this.cards.push(card);
    // update related values after adding new card to the array
    this.updateIndices();
  }

  // delete card
  deleteCard = (card: Card) => {
    // filter cards by removing one that has id of a card we get from child
    this.cards = this.cards.filter(val => val.id !== card.id);
    // update related values after deleting card
    this.updateIndices();
  }

  // get new current index of the page from child component
  setCurrentPage = (val: number) => {
    this.currentPage = val;
    // update related values after updating current page
    this.updateIndices();
  }

  // get new limit value from child component
  updateLimit = (limit: number) => {
    this.limit = limit;
    // update related values after updating limit value
    this.updateIndices();
  }

  // call functions that handle update
  updateIndices = () => {
    this.updatePage();
    this.updateIndexStart();
  }

  // set new total page number using array length and page limit
  updatePage = () => {
    // calculate min page number by using Math.floor
    // if we have 9 or 10 cards and limit is 3, then number pages = 3
    this.page = Math.floor(this.cards.length / this.limit);
    // from example above, if 9 and 3, then everything is fine,
    // but for 10 and 3, 1 card we be left out, thus need to increase number of pages
    if (this.cards.length % this.limit !== 0){
      this.page += 1;
    }
  }

  // calculate new start index for current page
  updateIndexStart = () => {
    // current page starts from 1, and index of array from 0, thus currentPage - 1,
    // and then * limit to calculate start index for current page
    this.indexStart = (this.currentPage - 1) * this.limit;
    // update end index of current page because we updated start index
    this.updateIndexEnd();
  }

  // calucate new end index for current page
  updateIndexEnd = () => {
    // find minimum between array size and start index + limit, because in some cases sum may be greater
    // use a - -b instead of a + b, because we have numbers and not integers
    this.indexEnd = Math.min(this.indexStart - -this.limit, this.cards.length);
  }
}
