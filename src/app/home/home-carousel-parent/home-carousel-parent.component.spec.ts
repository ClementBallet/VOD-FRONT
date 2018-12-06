import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarouselParentComponent } from './home-carousel-parent.component';

describe('HomeCarouselParentComponent', () => {
  let component: HomeCarouselParentComponent;
  let fixture: ComponentFixture<HomeCarouselParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCarouselParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarouselParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
