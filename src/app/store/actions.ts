import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {FilterType, ICard} from "../interfaces";

export const actions = {
  changeFilterType: createAction('[CONTENT] change Filter Type', props<{ filterType: FilterType }>()),
  changeLessThan500Filter: createAction('[CONTENT] change Less Than 500 Filter', props<{ checked: boolean }>()),
  changeFrom500To1000Filter: createAction('[CONTENT] change From 500 To 1000 Filter', props<{ checked: boolean }>()),
  changeFrom1000To2000Filter: createAction('[CONTENT] change From 1000 To 2000 Filter', props<{ checked: boolean }>()),
  changeUp2000Filter: createAction('[CONTENT] change Up & 2000 Filter', props<{ checked: boolean }>()),
  decreaseShoppingCardCount: createAction('[CONTENT] decrease Card Count', props<{ id: string }>()),
  increaseShoppingCardCount: createAction('[CONTENT] increase Card Count', props<{ card: ICard }>()),
  loadContent: createAction('[CONTENT] load content'),
  addCardToShop: createAction('[CONTENT] add Card To Shop', props<{ card: ICard }>()),
  changeSearchData: createAction('[CONTENT] change search data', props<{ search: string }>()),
  changePageData: createAction('[CONTENT] change page data', props<{ page: number }>()),
  loadedContentSuccess: createAction('[CONTENT] load content success', props<{ content: ICard[] }>()),
  loadedContentError: createAction('[CONTENT] load content error', props<{ error: HttpErrorResponse }>()),
  clearFilters: createAction('[CONTENT] clear filters'),
}
