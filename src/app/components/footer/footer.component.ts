import {Component, inject} from '@angular/core';
import {actions} from "../../store/actions";
import {getCurrentPage, getPages} from "../../store/selectors";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {AsyncPipe, NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    NgClass,
    MatIcon,
    AsyncPipe
  ],
  standalone: true,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  store = inject(Store);
  page$ = this.store.select(getCurrentPage);
  pages$ = this.store.select(getPages);

  constructor(public router: Router) {}

  changePage(page: number): void {
    this.store.dispatch(actions.changePageData({page}))
  }
}
