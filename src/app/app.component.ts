import {Component, OnInit} from '@angular/core';
import {Card} from './models/Card';

// main component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // app title
  title = 'SimplePagination';
  // cards that will be displayed
  cards: Array<Card> = [];
  // if true then show modal to update card
  updateActive: boolean;
  // pass selected card to update to modal component
  cardToUpdate: Card;
  // total number of pages
  page: number;
  // current page
  currentPage: number;
  // start index of the array to start from to display
  indexStart: number;
  // end index of the array till end to display
  indexEnd: number;
  // number of cards per page
  limit: number;
  // borders of cards per page
  limitMin: number;
  limitMax: number;

  // set initial values for pagination
  ngOnInit(): void {
    // load cards from localstorage
    this.handleLocalStorage();
    // set initial values to use
    this.handleInitValues();
    // update number of pages, start index and end index
    this.updateIndices();
  }
  // upload data from local storage or create local storage item
  handleLocalStorage(): void {
    if ('cards' in localStorage){
      this.cards = JSON.parse(localStorage['cards'.toString()]);
    }else{
      this.cards = [];
      localStorage.setItem('cards', JSON.stringify(this.cards));
    }
  }
  // set up initial values
  handleInitValues(): void {
    this.limit = 5;
    this.limitMin = 2;
    this.limitMax = 10;
    this.indexStart = 0;
    this.currentPage = 1;
    this.updateActive = false;
    this.cardToUpdate = null;
  }
  // create new card
  createCard(card: Card): void {
    // we want to generate card with unique id
    card.id = card.generateId(this.cards);
    this.cards.push(card);
    localStorage.setItem('cards', JSON.stringify(this.cards));
    // update related values after adding new card to the array
    this.updateIndices();
  }

  // update card
  updateCard(card: Card): void {
    this.cardToUpdate = card;
    this.updateActive = true;
  }

  // save updated card that we get from child component
  saveUpdatedCard(card: Card): void {
    this.updateActive = false;
    this.cardToUpdate = null;
    const index = this.cards.findIndex(val => val.id === card.id);
    this.cards[index] = card;
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  // delete card
  deleteCard = (card: Card) => {
    // filter cards by removing one that has id of a card we get from child
    this.cards = this.cards.filter(val => val.id !== card.id);
    localStorage.setItem('cards', JSON.stringify(this.cards));
    // update related values after deleting card
    this.updateIndices();
  }

  // get new current index of the page from child component
  setCurrentPage(val: number): void {
    // check to prevent val = 0 and val > number of pages
    if (val > 0 && val <= this.page){
      this.currentPage = val;
      // update related values after updating current page
      this.updateIndices();
    }

  }

  // get new limit value from child component
  updateLimit(limit: number): void {
    this.limit = limit;
    // update related values after updating limit value
    this.updateIndices();
  }

  // call functions that handle update
  updateIndices(): void {
    this.updatePage();
    this.updateIndexStart();
  }

  // set new total page number using array length and page limit
  updatePage(): void {
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
  updateIndexStart(): void {
    // current page starts from 1, and index of array from 0, thus currentPage - 1,
    // and then * limit to calculate start index for current page
    this.indexStart = (this.currentPage - 1) * this.limit;
    // update end index of current page because we updated start index
    this.updateIndexEnd();
  }

  // calculate new end index for current page
  updateIndexEnd(): void {
    // find minimum between array size and start index + limit, because in some cases sum may be greater
    // use a - -b instead of a + b, because we have numbers and not integers
    this.indexEnd = Math.min(this.indexStart - -this.limit, this.cards.length);
  }
}
