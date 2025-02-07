import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
} from "@angular/material/dialog";
import {ICard} from "../../interfaces";
import {actions} from "../../store/actions";
import {Store} from "@ngrx/store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  imports: [
    MatDialogModule,
    MatButton
  ],
  standalone: true,
  styleUrl: './info-dialog.component.scss'
})
export class InfoDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICard, private store: Store, private snackbar: MatSnackBar) {
  }

  addToCart() {
    this.store.dispatch(actions.addCardToShop({card: this.data}));
    this.snackbar.open('Added to Cart!', '', {
      horizontalPosition: "right",
      verticalPosition: "top",
      duration: 2000
    });
  }
}
