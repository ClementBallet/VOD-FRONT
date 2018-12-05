import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// PAGES
import { HomeComponent } from './home/home.component';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeFiltersComponent } from './home/home-filters/home-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieSingleComponent,
    ShoppingCartComponent,
    HomeComponent,
    HomeCarouselComponent,
    HomeFiltersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: ''}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
