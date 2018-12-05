import { Routes } from '@angular/router';

import {MovieSingleComponent} from "./movie-single/movie-single.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {HomeComponent} from "./home/home.component";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MovieSingleComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
