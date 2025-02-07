import {createFeatureSelector, createSelector} from "@ngrx/store";
import {APP_KEY, AppState} from "./state";
import {FilterType, ICard} from "../interfaces";

export const featureSelector
  = createFeatureSelector<AppState>(APP_KEY);

export const getContent = createSelector(
  featureSelector,
  state => state.content
);

export const getShoppingContent = createSelector(
  featureSelector,
  state => state.shoppingContent
);

export const getShoppingItemCount = (id: string) => createSelector(
  getShoppingContent,
  shoppingContent => shoppingContent.filter(card => card.id === id).length
);

export const getUniqShoppingContent = createSelector(
  getShoppingContent,
  shoppingContent => {
    let newContent: ICard[] = [];
    shoppingContent.forEach(card => !newContent.some(newCard => newCard.id === card.id) && newContent.push(card));
    return newContent.sort((a,b) => a.title.localeCompare(b.title));
  }
);

export const getShoppingCount = createSelector(
  featureSelector,
  state => state.shoppingContent.length
);

export const getSelectedFilterType = createSelector(
  featureSelector,
  state => state.filterType
);

export const getFilterData = createSelector(
  featureSelector,
  state => state.filteredData
);

export const getIsLessThan500Filter = createSelector(
  getFilterData,
  filteredData => filteredData.isLessThan500
);

export const getIsFrom500to1000 = createSelector(
  getFilterData,
  filteredData => filteredData.isFrom500to1000
);

export const getIsFrom1000to2000Filter = createSelector(
  getFilterData,
  filteredData => filteredData.isFrom1000to2000
);

export const getIsUp2000Filter = createSelector(
  getFilterData,
  filteredData => filteredData.isUp2000
);

export const getCurrentPage = createSelector(
  getFilterData,
  (filterData) => filterData.page
);

export const getFilteredContent = createSelector(
  getContent,
  getSelectedFilterType,
  getFilterData,
  (content, filterType, {search, isLessThan500, isFrom500to1000, isFrom1000to2000, isUp2000}) => content
    .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter(item => (item.type === filterType) || (filterType === FilterType.All))
    .filter(item => (
      isLessThan500 && +item.prize < 500) ||
      (isFrom500to1000 && +item.prize > 500 && +item.prize < 1000) ||
      (isFrom1000to2000 && +item.prize > 1000 && +item.prize < 2000) ||
      (isUp2000 && +item.prize > 2000) ||
      (!isLessThan500 && !isFrom500to1000 && !isFrom1000to2000 && !isUp2000)
    )
);

export const getPages = createSelector(
  getFilteredContent,
  (filteredContent) => {
    const pages = Math.ceil(filteredContent.length / 10);
    const arr = [];
    for (let i = 1; i <= pages; i++) {
      arr.push(i);
    }
    return arr;
  }
);

export const getContentForOnePage = createSelector(
  getFilteredContent,
  getFilterData,
  (content, {page}) => content
    .filter((_, n) => (n + 1) > (page * 10 - 10) && (n + 1) <= (page * 10))
);

export const getError = createSelector(
  featureSelector,
  state => state.error
);

export const isLoading = createSelector(
  featureSelector,
  state => state.isLoadContent
);
