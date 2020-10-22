import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenGalleryComponent } from './between-gallery.component';

describe('BetweenGalleryComponent', () => {
  let component: BetweenGalleryComponent;
  let fixture: ComponentFixture<BetweenGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetweenGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetweenGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
