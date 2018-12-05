import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePresentationComponent } from './home-page-presentation.component';

describe('HomePagePresentationComponent', () => {
  let component: HomePagePresentationComponent;
  let fixture: ComponentFixture<HomePagePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
