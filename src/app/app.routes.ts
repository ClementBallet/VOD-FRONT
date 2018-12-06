import { Routes } from '@angular/router';

import { MovieSingleComponent } from './movie-single/movie-single.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home-global/home.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MovieSingleComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'about', component: AboutComponent},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
