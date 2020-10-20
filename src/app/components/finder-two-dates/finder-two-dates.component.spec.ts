import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderTwoDatesComponent } from './finder-two-dates.component';

describe('FinderTwoDatesComponent', () => {
  let component: FinderTwoDatesComponent;
  let fixture: ComponentFixture<FinderTwoDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinderTwoDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderTwoDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
