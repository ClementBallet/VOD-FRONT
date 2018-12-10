import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePricingComponent } from './movie-pricing.component';

describe('MoviePricingComponent', () => {
  let component: MoviePricingComponent;
  let fixture: ComponentFixture<MoviePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
