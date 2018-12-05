import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_CONFIG } from './app.config';

import { NavbarComponent } from './navbar/navbar.component';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
// PAGE HOME
import {HomeComponent} from "./home/home.component";
import {HomeCarouselComponent} from "./home/home-carousel/home-carousel.component";
import {HomeFiltersComponent} from "./home/home-filters/home-filters.component";

import {environment} from "../environments/environment";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        HomeCarouselComponent,
        HomeFiltersComponent,
        MovieSingleComponent,
        ShoppingCartComponent
      ],
      imports: [
        RouterModule
      ],
      providers: [
        {provide: APP_CONFIG, useValue: environment},
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'projet-vod'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('projet-vod');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to projet-vod!');
  });
});
