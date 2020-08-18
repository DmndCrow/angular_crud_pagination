import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component, Input} from '@angular/core';
import {Card} from './models/Card';

@Component({selector: 'app-card', template: ''})
class CardComponent {
  @Input() card: Card;
}

describe('AppComponent', () => {
  let cardComponent: CardComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should pass card to app-card', () => {
    expect(cardComponent).toBeTruthy();
  });
});
