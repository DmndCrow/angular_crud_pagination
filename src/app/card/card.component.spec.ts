import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import {Card} from '../models/Card';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let header: HTMLElement;
  let body: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = new Card('1', 'name', 'description');
    header = fixture.nativeElement.querySelector('#class-header');
    body = fixture.nativeElement.querySelector('#class-body');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
