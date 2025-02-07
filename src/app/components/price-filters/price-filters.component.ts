import {Component, inject} from '@angular/core';
import {FilterPrice} from "../../interfaces";
import {MatCheckbox, MatCheckboxChange} from "@angular/material/checkbox";
import {Store} from "@ngrx/store";
import {actions} from "../../store/actions";
import {
  getIsFrom1000to2000Filter,
  getIsFrom500to1000,
  getIsLessThan500Filter,
  getIsUp2000Filter
} from "../../store/selectors";
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-price-filters',
  templateUrl: './price-filters.component.html',
  imports: [
    MatCheckbox,
    AsyncPipe
  ],
  standalone: true,
  styleUrl: './price-filters.component.scss'
})
export class PriceFiltersComponent {
  store = inject(Store);
  isLessThan500Filter$ = this.store.select(getIsLessThan500Filter);
  isFrom500to1000Filter$ = this.store.select(getIsFrom500to1000);
  isFrom1000to2000Filter$ = this.store.select(getIsFrom1000to2000Filter);
  isUp2000Filter$ = this.store.select(getIsUp2000Filter);

  protected readonly FilterPrice = FilterPrice;

  changePriceFilter({ checked }: MatCheckboxChange, priceFilter: FilterPrice): void {
    if(priceFilter === FilterPrice.lessThan500) this.store.dispatch(actions.changeLessThan500Filter({checked}))
    else if(priceFilter === FilterPrice.from500to1000) this.store.dispatch(actions.changeFrom500To1000Filter({checked}))
    else if(priceFilter === FilterPrice.from1000to2000) this.store.dispatch(actions.changeFrom1000To2000Filter({checked}))
    else if(priceFilter === FilterPrice.up2000) this.store.dispatch(actions.changeUp2000Filter({checked}))
  }
}
