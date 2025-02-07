import {HttpErrorResponse} from "@angular/common/http";
import {ActionReducerMap} from "@ngrx/store";
import {reducer} from "./reducer";
import {FilteredData, FilterType, ICard} from "../interfaces";

export const APP_KEY = 'app';

export interface AppState {
  content: ICard[];
  shoppingContent: ICard[];
  isLoadContent: boolean;
  filterType: FilterType;
  error: HttpErrorResponse | null;
  filteredData: FilteredData;
}

export interface State {
  [APP_KEY]: AppState;
}

export const reducers: ActionReducerMap<State> = {
  [APP_KEY]: reducer,
};
