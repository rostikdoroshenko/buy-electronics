import { Routes } from '@angular/router';
import {CardListComponent} from './components/card-list/card-list.component';
import {CartComponent} from './components/cart/cart.component';

export const routes: Routes = [
  {path: '', component: CardListComponent},
  {path: 'cart', component: CartComponent},

];
