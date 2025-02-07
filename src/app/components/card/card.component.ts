import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICard} from "../../interfaces";
import {CurrencyPipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [
    CurrencyPipe,
    MatIcon
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() card!: ICard;
}
