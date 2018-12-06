import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarouselEnfantComponent } from './home-carousel-enfant.component';

describe('HomeCarouselEnfantComponent', () => {
  let component: HomeCarouselEnfantComponent;
  let fixture: ComponentFixture<HomeCarouselEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCarouselEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarouselEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
