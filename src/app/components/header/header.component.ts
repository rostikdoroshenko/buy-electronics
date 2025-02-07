import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {actions} from "../../store/actions";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {Store} from "@ngrx/store";
import {FilterType} from "../../interfaces";
import {getFilterData, getSelectedFilterType, getShoppingCount} from "../../store/selectors";
import {Router, RouterLink} from "@angular/router";
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatButton,
    MatIcon,
    MatLabel,
    RouterLink,
    AsyncPipe,
    MatInput,
    MatSuffix
  ],
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly FilterType = FilterType;
  readonly INPUT = 'input';
  store = inject(Store);
  formGroup: FormGroup;
  shoppingCount$ = this.store.select(getShoppingCount);
  getFilterData$ = this.store.select(getFilterData);
  selectedType = FilterType.All;
  typeFilters: FilterType[] = [FilterType.All, FilterType.Appliances, FilterType.TVs, FilterType.Phones, FilterType.VideoGames, FilterType.Laptops];

  constructor(public router: Router) {
    this.store.select(getSelectedFilterType).subscribe(type => this.selectedType = type);

    this.formGroup = new FormGroup({
      input: new FormControl(''),
    });
    this.formGroup.controls[this.INPUT].valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe(search => {
        this.store.dispatch(actions.changeSearchData({search}));
      }
    );
  }

  clearSearch(e: Event): void {
    e.preventDefault();
    this.formGroup.controls[this.INPUT].setValue('');
  }

  changeFilterType(): void {
    this.store.dispatch(actions.changeFilterType({filterType: this.selectedType}));
  }

  clearFilters(): void {
    this.formGroup.controls[this.INPUT].setValue('');
    this.store.dispatch(actions.clearFilters());
  }
}
