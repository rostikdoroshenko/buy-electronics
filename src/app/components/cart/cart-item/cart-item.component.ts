import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import {ICard} from "../../../interfaces";
import {getShoppingItemCount} from "../../../store/selectors";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {actions} from "../../../store/actions";
import {MatIcon} from '@angular/material/icon';
import {AsyncPipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  imports: [
    MatIcon,
    CurrencyPipe,
    AsyncPipe
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  store = inject(Store);
  @Input() card!: ICard;

  shoppingItemCount$!: Observable<number>;

  ngOnInit() {
    this.shoppingItemCount$ = this.store.select(getShoppingItemCount(this.card.id));
  }

  decreaseItemCount(id: string) {
    this.store.dispatch(actions.decreaseShoppingCardCount({id}));
  }

  increaseItemCount(card: ICard) {
    this.store.dispatch(actions.increaseShoppingCardCount({card}));
  }
}
