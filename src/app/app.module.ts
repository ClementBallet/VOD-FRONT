import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieSingleComponent } from './movie-single/single-general/movie-single.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// PAGES
import { HomeComponent } from './home/home-global/home.component';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeFiltersComponent } from './home/home-filters/home-filters.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeCarouselParentComponent } from './home/home-carousel-parent/home-carousel-parent.component';
import { HomeCarouselEnfantComponent } from './home/home-carousel-enfant/home-carousel-enfant.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './movie-single/single-rating/rating.component';
import { MoviePricingComponent } from './movie-single/single-pricing/movie-pricing.component';
import { AboutComponent } from './about/about.component';
import { ModalYoutubeComponent } from './movie-single/single-youtube/modal-youtube.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieSingleComponent,
    ShoppingCartComponent,
    AboutComponent,
    HomeComponent,
    HomeCarouselComponent,
    HomeCarouselParentComponent,
    HomeCarouselEnfantComponent,
    HomeFiltersComponent,
    RatingComponent,
    MoviePricingComponent,
    ModalYoutubeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    HttpClientModule,
    SharedModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: ''}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
