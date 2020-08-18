import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLimitComponent } from './page-limit.component';

describe('PageLimitComponent', () => {
  let component: PageLimitComponent;
  let fixture: ComponentFixture<PageLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
