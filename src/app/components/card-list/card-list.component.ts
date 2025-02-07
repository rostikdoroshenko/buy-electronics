import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {
  getContentForOnePage,
  getError,
  isLoading
} from "../../store/selectors";
import {ICard} from "../../interfaces";
import {MatDialog} from "@angular/material/dialog";
import {InfoDialogComponent} from "../info-dialog/info-dialog.component";
import {MatProgressBar} from '@angular/material/progress-bar';
import {AsyncPipe} from '@angular/common';
import {PriceFiltersComponent} from '../price-filters/price-filters.component';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatProgressBar,
    AsyncPipe,
    PriceFiltersComponent,
    CardComponent
  ]
})
export class CardListComponent {
  store = inject(Store);
  getContentForOnePage$ = this.store.select(getContentForOnePage);
  isLoading$ = this.store.select(isLoading);
  error$ = this.store.select(getError);

  constructor(private matDialog: MatDialog) {}

  openDialog(card: ICard) {
    this.matDialog.open(InfoDialogComponent, {
      data: card,
      minWidth: '800px'
    });
  }
}
