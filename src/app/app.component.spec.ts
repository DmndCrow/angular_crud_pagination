import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from './models/Card';

@Component({selector: 'app-card', template: ''})
class CardComponent {
  @Input() card: Card;
  @Output() deleteCardItem: EventEmitter<Card> = new EventEmitter<Card>();
  @Output() updateCardItem: EventEmitter<Card> = new EventEmitter<Card>();
}

@Component({selector: 'app-input', template: ''})
class InputComponent {
  @Output() notifySubmit: EventEmitter<Card> = new EventEmitter<Card>();
}

@Component({selector: 'app-modal', template: ''})
class ModalComponent {
  @Input() active: boolean;
  @Input() card: Card;
  @Output() updateCardItem: EventEmitter<Card> = new EventEmitter<Card>();
}

@Component({selector: 'app-page-limit', template: ''})
class PageLimitComponent {
  @Output() notifyLimit: EventEmitter<any> = new EventEmitter<any>();
}

@Component({selector: 'app-pagination', template: ''})
class PaginationComponent {
  @Input() page: number;
  @Input() current: number;
  @Output() notifyUpdatePage: EventEmitter<number> = new EventEmitter<number>();
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent,
        InputComponent,
        ModalComponent,
        PageLimitComponent,
        PaginationComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
