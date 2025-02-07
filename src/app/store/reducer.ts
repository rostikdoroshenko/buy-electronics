import {createReducer, on} from "@ngrx/store";
import {AppState} from "./state";
import {actions} from "./actions";
import {FilteredData, FilterType} from "../interfaces";

const initialFilterData: FilteredData = {
  search: '',
  isLessThan500: false,
  isFrom500to1000: false,
  isFrom1000to2000: false,
  isUp2000: false,
  page: 1
}

export const initialState: AppState = {
  content: [],
  shoppingContent: [],
  isLoadContent: false,
  filterType: FilterType.All,
  error: null,
  filteredData: initialFilterData
}

export const reducer = createReducer<AppState>(
  initialState,
  on(actions.loadContent, (state: AppState) => ({
    ...state,
    content: [],
    filteredData: initialState.filteredData,
    isLoadContent: true
  })),
  on(actions.loadedContentSuccess, (state, {content})  => ({
    ...state,
    content,
    isLoadContent: false
  })),
  on(actions.loadedContentError, (state, {error})  => ({
    ...state,
    error,
    isLoadContent: false
  })),
  on(actions.changeFilterType, (state, {filterType})  => ({
    ...state,
    filterType,
    filteredData: {
      ...state.filteredData,
      page: initialState.filteredData.page
    }
  })),
  on(actions.changeLessThan500Filter, (state, { checked})  => ({
    ...state,
    filteredData: {
      ...state.filteredData,
      page: initialState.filteredData.page,
      isLessThan500: checked
    }
  })),
  on(actions.changeFrom500To1000Filter, (state, { checked})  => ({
    ...state,
    filteredData: {
      ...state.filteredData,
      page: initialState.filteredData.page,
      isFrom500to1000: checked
    }
  })),
  on(actions.changeFrom1000To2000Filter, (state, { checked})  => ({
    ...state,
    filteredData: {
      ...state.filteredData,
      page: initialState.filteredData.page,
      isFrom1000to2000: checked
    }
  })),
  on(actions.changeUp2000Filter, (state, { checked})  => ({
    ...state,
    filteredData: {
      ...state.filteredData,
      page: initialState.filteredData.page,
      isUp2000: checked
    }
  })),
  on(actions.addCardToShop, (state, {card})  => ({
    ...state,
    shoppingContent: [
      ...state.shoppingContent,
      card
    ]
  })),
  on(actions.changeSearchData, (state, {search})  => ({
    ...state,
      filteredData: {
      ...state.filteredData,
        page: initialState.filteredData.page,
      search
    },
  })),
  on(actions.changePageData, (state, {page})  => ({
    ...state,
    filteredData: {
      ...state.filteredData,
      page
    },
  })),
  on(actions.decreaseShoppingCardCount, (state, {id})  => {
    const index = state.shoppingContent.findIndex(card => card.id === id);
    let content = [...state.shoppingContent];
    content.splice(index, 1);
    return {
      ...state,
      shoppingContent: content
    }
  }),
  on(actions.increaseShoppingCardCount, (state, {card})  => {
    return {
      ...state,
      shoppingContent: [
        ...state.shoppingContent,
        card
      ]
    }
  }),
  on(actions.clearFilters, (state)  => ({
    ...state,
    filteredData: initialFilterData,
    filterType: FilterType.All
  })),
);
