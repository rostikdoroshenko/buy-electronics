import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {getUniqShoppingContent} from "../../store/selectors";
import {CartItemComponent} from './cart-item/cart-item.component';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    CartItemComponent,
    AsyncPipe
  ],
  standalone: true,
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  store = inject(Store);
  shoppingContent$ = this.store.select(getUniqShoppingContent);
}
